import Image from "next/image";

function navbar() {
  return (
    <div className="w-full flex justify-center h-16">
      <div className="w-[80%] mt-2 mx-4 h-full justify-between flex items-center pt-2">
        <div>
          <Image
            className=""
            src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/jwlogosolutionblanc.svg?alt=media&token=7c0af8d1-bdc2-4933-8911-2862ee8c33f7"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Go-To-Market service</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div>
          {/* Burger menu */}
          Menu
        </div>
      </div>
    </div>
  );
}

export default navbar;
