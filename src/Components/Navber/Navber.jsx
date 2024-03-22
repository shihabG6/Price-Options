import { useState } from "react";
import NavLInk from "../NavLink/NavLInk";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { name: "Home", path: "/", id: 1 },
    { name: "About", path: "/about", id: 2 },
    { name: "Products", path: "/products", id: 3 },
    { name: "Contact", path: "/contact", id: 4 },
    { name: "Sarvise", path: "/404", id: 5 },
  ];

  return (
    <div className=" py-2  bg-slate-300">
      
      <div className="md:hidden btn text-2xl" onClick={() => setOpen(!open)}>
        {open === false ? <RiMenu2Fill></RiMenu2Fill> : <RxCross1></RxCross1>}
      </div>
      <ul
        className={`  md:flex absolute md:static  md:bg-none  md:gap-10 duration-500 
      
      ${open ? "left-2" : "-left-40"}`}
      >
        {routes.map((route, idx) => (
          <NavLInk className="" key={idx} route={route}></NavLInk>
        ))}
      </ul>
    </div>
  );
};

export default Navber;
