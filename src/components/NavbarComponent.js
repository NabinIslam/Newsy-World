import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavbarComponent = () => {
  let links = [
    { name: "Technology", link: "/technology" },
    { name: "Politics", link: "/politics" },
    { name: "Sports", link: "/sports" },
    { name: "Entertainment", link: "/entertainment" },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="shadow text-white bg-black ">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <h1 className="font-bold text-2xl">NewsyWorld</h1>
        <ul className="hidden md:flex">
          {links.map((Link) => (
            <li className="px-2">
              <a className="font-bold" href={Link.link}>
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="cursor-pointer block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-500 h-full bg-black ease-in-out duration-500"
              : "fixed left-[-100%] "
          }
        >
          <ul>
            <ul className=" px-5 pt-2">
              {links.map((Link) => (
                <li className="py-2 border-b border-b-gray-600">
                  <a href={Link.link}>{Link.name}</a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
