import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { ModeToggle } from "../components/darkmode-toggle";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

let menuItems = [
  {
    name: "Profil"
  },
  {
    name: "Expérience"
  },
  {
    name: "Formation"
  },
];

export default function Home() {
  return (
    <Navbar className="pt-10 pl-10 pr-10 text-2xl w-screen">
      <NavbarBrand className="text-inherit">
        <p className="font-bold">
          <span className="uppercase">Rifflart</span> <br /> <span>Damien</span>
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10">
        {menuItems.map((item) => (
          <NavbarItem>
            <Link color="foreground" href={`#${item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} className="group hover:-translate-y-1 transition ease-in-out">
              <TiChevronLeft className="opacity-0 group-hover:opacity-100 duration-200 ease-in-out transition text-accent" size={25} />
              {item.name}
              <TiChevronRight className="opacity-0 group-hover:opacity-100 duration-200 ease-in-out transition text-accent" size={25} />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ModeToggle />
      </NavbarContent>
    </Navbar>
  );
}
