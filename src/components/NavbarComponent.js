import React, { useState } from "react";

const NavbarComponent = () => {
  let links = [
    { name: "Technology", link: "/technology" },
    { name: "Politics", link: "/politics" },
    { name: "Sports", link: "/sports" },
    { name: "Entertainment", link: "/entertainment" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow">
      <h1>NewsyWorld</h1>
      <ul>
        {links.map((Link) => (
          <li>
            <a href={Link.link}>{Link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
