import { useState } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const handleSubmit = () => {
    setIsSignedIn(true);
  };

  const navigate = useNavigate();

  return (
    <div className=" ">
      <Navbar className="border-b-2" style={{ backgroundColor: "black" }}>
        <Navbar.Brand>
          <img
            src="logo.png"
            className="h-14 w-12 rounded-full cursor-pointer"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <span style={{ marginLeft: "10vw" }}>
            <Button
              onClick={() => navigate("/signin")}
              color={"gray"}
              className="bg-zinc-400 text-green-500  "
            >
              Sign in{" "}
            </Button>
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 items-center">
          <form className="flex">
            <input
              type="text"
              placeholder="search..."
              className="rounded-l-3xl border-2 border-black font-bold lg:inline"
              style={{ borderRadius: "50px 0 0 50px" }}
            />
            <span
              className="rounded-r-3xl border-black border-2  bg-white flex justify-center items-center p-2  "
              style={{ borderRadius: "0 50px 50px 0" }}
            >
              <FaSearch className="bg-white text-black" />
            </span>
          </form>

          <span className="ml-4">
            <Navbar.Toggle />
          </span>
        </div>
        <Navbar.Collapse>
          <Button
            onClick={() => navigate("/about")}
            color={"gray"}
            className="bg-zinc-400 text-green-500  "
          >
            About
          </Button>
          <Button
            onClick={() => navigate("/project")}
            color={"gray"}
            className="bg-zinc-400 text-green-500  "
          >
            Project
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
