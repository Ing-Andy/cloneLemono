import { Heart, Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { SidebarTrigger } from "../ui/sidebar";
import ChangeThem from "./ChangeThem";
import { Button } from "../ui/button";

export default function MainHeader() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const handleChangeShowInput = () => {
    setShowInput(!showInput);
    console.log(showInput);
  };
  const [input, setInput] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <header className="w-full px-2 bg-transparent backdrop-blur-xs flex justify-between absolute z-50">
      <div className="flex justify-center items-center w-16 bg-[#f9f9f9] dark:bg-[#1a1a1a] rounded-sm ">
        <SidebarTrigger />
        <ChangeThem />
      </div>
      <div className="flex items-center justify-center ml-2 rounded-sm">
        <div
          className={`flex ${
            showInput === false ? "w-9" : "w-120"
          } cursor-pointer h-9 items-center justify-end bg-[#f9f9f9] shadow-sm dark:shadow-black dark:bg-[#1a1a1a]  text-black mr-2 border-[1px] border-[#f9f9f9] dark:border-black rounded-lg overflow-hidden transition-all duration-1000 easy-in-out `}
        >
          {showInput === true && (
            <div className="flex w-full h-full bg-blue-800 justify-end">
              <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="votre recherche"
                className="rounded-l-md pl-3 bg-[#f9f9f9] w-full dark:bg-[#1a1a1a] dark:text-[#f9f9f9] h-full outline-none border-none focus:bg-neutral-100 transition-colors duration-1000"
              />
            </div>
          )}
          <Button
            className={`rounded-l-none border-none flex h-full easy-in-out  transition-colors duration-1000 ${
              showInput === false
                ? "bg-[#f9f9f9]  text-black dark:bg-[#1a1a1a]  dark:text-white w-9 hover:bg-white hover:text-black dark:hover:bg-[#1a1a1a] transition-colors duration-1000 "
                : "w-20 dark:bg-white dark:text-black dark:hover:bg-white transition-colors duration-1000"
            } group`}
            onClick={handleChangeShowInput}
          >
            <Search size={17} className="group-hover:scale-110" />
          </Button>
        </div>
        <div className="gap-4 flex bg-[#f9f9f9] dark:bg-[#1a1a1a] shadow-sm dark:shadow-black items-center justify-center h-9 w-15 rounded-lg transition-colors duration-1000  ">
          <div className="flex items-center justify-around bg-[#f9f9f9] w-16  rounded-sm shadow-sm dark:shadow-black  dark:bg-[#1a1a1a] *:hover:scale-110 overflow-hidden ">
            <Heart
              size={17}
              className="hover:scale-110 hover:bg-neutral-100 hover:rounded-sm hover:text-black duration-500"
            />
            <ShoppingBag
              size={17}
              className="hover:scale-110 hover:bg-neutral-100 hover:rounded-sm hover:text-black duration-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
