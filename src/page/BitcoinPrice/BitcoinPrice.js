import React, { useEffect, useRef } from "react";
import "./BitcoinPrice.css";
function BitcoinPrice({bitcoinPriceJwCorpDomain}) {
  const container = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|3M"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
    container.current.appendChild(script);
  }, []);
  return (
    <>
      <div className="bitcoin-price-container">
        <h1 className="bitcoin-price-title">Evolution du prix du Bitcoin :</h1>
        <div className="bitcoin-price-wrap">
          <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/"
                // rel="noopener nofollow"
                target="_blank"
                rel="noreferrer"
              >
                {/* <span className="blue-text">
                  Track all markets on TradingView
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BitcoinPrice;
