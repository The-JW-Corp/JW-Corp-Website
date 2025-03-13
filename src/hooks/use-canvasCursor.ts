'use client';

import { useEffect } from 'react';

interface NodeConfig {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

class SineGenerator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  private valueCache: number;

  constructor(config: NodeConfig = {}) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
    this.valueCache = 0;
  }

  update(): number {
    this.phase += this.frequency;
    this.valueCache = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.valueCache;
  }

  value(): number {
    return this.valueCache;
  }
}

interface NodeType {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

class Node implements NodeType {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

interface LineConfig {
  spring: number;
}

interface EnvConfig {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

interface Position {
  x: number;
  y: number;
}

interface CanvasContext extends CanvasRenderingContext2D {
  running?: boolean;
  frame?: number;
}

class Line {
  spring: number;
  friction: number;
  nodes: NodeType[];

  constructor(config: LineConfig, envConfig: EnvConfig, position: Position) {
    this.spring = config.spring + 0.1 * Math.random() - 0.02;
    this.friction = envConfig.friction + 0.01 * Math.random() - 0.002;
    this.nodes = [];

    for (let i = 0; i < envConfig.size; i++) {
      const node = new Node();
      node.x = position.x;
      node.y = position.y;
      this.nodes.push(node);
    }
  }

  update(position: Position, envConfig: EnvConfig): void {
    let currentSpring = this.spring;
    let firstNode = this.nodes[0];
    
    firstNode.vx += (position.x - firstNode.x) * currentSpring;
    firstNode.vy += (position.y - firstNode.y) * currentSpring;
    
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const currentNode = this.nodes[i];
      
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        currentNode.vx += (prevNode.x - currentNode.x) * currentSpring;
        currentNode.vy += (prevNode.y - currentNode.y) * currentSpring;
        currentNode.vx += prevNode.vx * envConfig.dampening;
        currentNode.vy += prevNode.vy * envConfig.dampening;
      }
      
      currentNode.vx *= this.friction;
      currentNode.vy *= this.friction;
      currentNode.x += currentNode.vx;
      currentNode.y += currentNode.vy;
      
      currentSpring *= envConfig.tension;
    }
  }

  draw(context: CanvasContext): void {
    let node: NodeType;
    let nextNode: NodeType;
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    
    context.beginPath();
    context.moveTo(x, y);
    
    for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
      node = this.nodes[i];
      nextNode = this.nodes[i + 1];
      x = 0.5 * (node.x + nextNode.x);
      y = 0.5 * (node.y + nextNode.y);
      context.quadraticCurveTo(node.x, node.y, x, y);
    }
    
    node = this.nodes[this.nodes.length - 2];
    nextNode = this.nodes[this.nodes.length - 1];
    context.quadraticCurveTo(node.x, node.y, nextNode.x, nextNode.y);
    context.stroke();
    context.closePath();
  }
}

const useCanvasCursor = (): void => {
  let ctx: CanvasContext | null = null;
  let sineGen: SineGenerator;
  let pos: Position = { x: 0, y: 0 };
  let lines: Line[] = [];
  
  const E: EnvConfig = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  function initLines(): void {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }, E, pos));
    }
  }

  function handleMouseMove(e: MouseEvent | TouchEvent): void {
    if ('touches' in e) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = (e as MouseEvent).clientX;
      pos.y = (e as MouseEvent).clientY;
    }
    e.preventDefault();
  }

  function handleTouchStart(e: TouchEvent): void {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }

  function onMousemove(e: MouseEvent | TouchEvent): void {
    document.removeEventListener('mousemove', onMousemove as EventListener);
    document.removeEventListener('touchstart', onMousemove as EventListener);
    document.addEventListener('mousemove', handleMouseMove as EventListener);
    document.addEventListener('touchmove', handleMouseMove as EventListener);
    document.addEventListener('touchstart', handleTouchStart as EventListener);
    
    handleMouseMove(e);
    initLines();
    render();
  }

  function render(): void {
    if (!ctx || !ctx.running) return;
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = 'rgba(121, 56, 213, 0.3)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < E.trails; i++) {
      const line = lines[i];
      line.update(pos, E);
      line.draw(ctx);
    }
    
    if (ctx.frame !== undefined) {
      ctx.frame++;
    }
    
    window.requestAnimationFrame(render);
  }

  function resizeCanvas(): void {
    if (!ctx || !ctx.canvas) return;
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  const renderCanvas = function (): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    ctx = context as CanvasContext;
    ctx.running = true;
    ctx.frame = 1;
    
    sineGen = new SineGenerator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    
    document.addEventListener('mousemove', onMousemove as EventListener);
    document.addEventListener('touchstart', onMousemove as EventListener);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    
    window.addEventListener('focus', () => {
      if (ctx && !ctx.running) {
        ctx.running = true;
        render();
      }
    });
    
    window.addEventListener('blur', () => {
      if (ctx) ctx.running = true;
    });
    
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      if (ctx) ctx.running = false;
      document.removeEventListener('mousemove', onMousemove as EventListener);
      document.removeEventListener('touchstart', onMousemove as EventListener);
      document.removeEventListener('mousemove', handleMouseMove as EventListener);
      document.removeEventListener('touchmove', handleMouseMove as EventListener);
      document.removeEventListener('touchstart', handleTouchStart as EventListener);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', () => {
        if (ctx && !ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener('blur', () => {
        if (ctx) ctx.running = true;
      });
    };
  }, []);
};

export default useCanvasCursor; 