import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import axios from "axios";
import Result from "../components/Result";
import { useSelector } from "react-redux";
import Link from "next/link";

const Nvavbar = () => {
  const item = useSelector((state) => state.movie);
  console.log(item, "hhghbjghjgh");
  console.log("l");

  return (
    <div>
      <div className="bg-[#121212] p-3 text-white flex flex-auto">
        <button className=" font-extrabold bg-[#F5C518] rounded-sm text-black w-14 text-lg ml-2">
          IMDb
        </button>
        <button className=" flex ml-7  mr-2 items-center w-24 p-1 hover:bg-[#252525]  text-sm font-bold  hover:rounded-md space-x-3">
          <CiMenuBurger /> Menu
        </button>
        <input
          type="text"
          style={{
            width: "40rem",
          }}
          placeholder="Search IMDb"
          className="rounded-sm p-1 text-black "
        />
        <button className="ml-5 bg-[#FFFFFF] text-black p-2  text-sm font-bold rounded-sm flex items-center">
          Search
        </button>

        <button className="ml-5 bg-[#FFFFFF] text-black p-2  text-sm font-bold rounded-sm flex items-center">
          Favorite {item?.length ? item.length : '' }
        </button>
      </div>

    </div>
  );
};

export default Nvavbar;
