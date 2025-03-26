import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export default function CustomNavbar() { 

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );
  return (
    <Navbar  >
      {/* Left Side */}
      <NavbarContent justify="start" className=" ">
        <NavbarMenuToggle className="sm:hidden" aria-label="Toggle menu" />
        <p className="hidden sm:block text-sm">ENGLISH</p> 
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize bg-transparent">
              {selectedValue}
              <span>▼</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Single selection example"
            selectedKeys={selectedKeys}
            selectionMode="single"
            variant="flat"
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="text">USD</DropdownItem>
            <DropdownItem key="number">Number</DropdownItem>
            <DropdownItem key="date">Date</DropdownItem>
            <DropdownItem key="single_date">Single Date</DropdownItem>
            <DropdownItem key="iteration">Iteration</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Center - Logo */}
      <NavbarBrand  className="  flex items-center justify-center">
        <p className="text-2xl font-semibold tracking-wide">DIAVAIA</p>
      </NavbarBrand>

      {/* Right Side */}
      <NavbarContent justify="end"  className=" ">
        <NavbarItem>
          <Search className="w-5 h-5 cursor-pointer" />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <User className="w-5 h-5 cursor-pointer" />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Heart className="w-5 h-5 cursor-pointer" />
        </NavbarItem>
        <NavbarItem>
          <ShoppingCart className="w-5 h-5 cursor-pointer relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              1
            </span>
          </ShoppingCart>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Shop</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
