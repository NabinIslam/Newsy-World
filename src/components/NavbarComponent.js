import React from "react";

const NavbarComponent = () => {
  let links = [
    { name: "Technology", link: "/technology" },
    { name: "Politics", link: "/politics" },
    { name: "Sports", link: "/sports" },
    { name: "Entertainment", link: "/entertainment" },
  ];
  return (
    <div className="shadow w-full fixed top-0 left-0">
      <nav className="md:flex bg-white py-4 px-4">
        <div>
          <h1 className="font-extrabold text-lg cursor-pointer">NewsyWorld</h1>
        </div>
        <ul>
          {links.map((Link) => (
            <li>
              <a href={Link.link}>{Link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarComponent;
