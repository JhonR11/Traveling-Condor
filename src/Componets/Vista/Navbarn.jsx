import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection} from "@nextui-org/react";


export default function App() {
  return (
    <Navbar >
      <NavbarBrand>
        <span className="TextLogo">Traveling Condor</span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <span color="foreground" className="NavbarT">
            Viaja
          </span>
        </NavbarItem>
        <NavbarItem isActive>
          <span  aria-current="page" color="#12A150" className="Txtx">
          Descrube
          </span>
        </NavbarItem>
        <NavbarItem>
          <span  className="NavbarT"color="foreground">
          Vive
          </span>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="NavbarT" href="https://github.com/Cod3G3ar">GitHub</Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button as={Link} color="primary" variant="flat">
                <span className="NavbarT">Configuracion</span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description" >
              <DropdownSection>
              <DropdownItem className="NavbarT"shortcut="Ctrl + P" description="Abril Perfil de Usuario" >
                <span className="NavbarT"> Perfil</span>
              </DropdownItem>
              </DropdownSection>          
              <DropdownSection title="Zona Peligrosa" className="NavbarT">
              <DropdownItem href="/" className="NavbarT" color="danger" shortcut="Alt+f4" description="Salir de la cuenta" >
                <span className="Salir">Salir</span>
              </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>       
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
