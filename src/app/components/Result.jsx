"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/movieSlice";

const Result = (props) => {
  const { data } = props;

  const dispatch =  useDispatch()


  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.map((items) => {
        return (
          <div key={items.id} className="flex items-center justify-center p-3 m-5 ">
            <Link href={"movie/movie"+items.id}>
              <div className="  h-[250px]">
                <div></div>
                <Image src={`${items.image}`} width={150} height={200} className="" />

                <h2 className="text-sm line-clamp-1">{items.title}</h2>
                <h4 className="text-xs">{items.price}</h4>
              </div>
                <button 
                onClick={()=> dispatch(add(items))}
             //   onClick={() => dispatch(add(item))}
                className=" flex text-white p-2  rounded-md m-3 items-center justify-center text-center bg-[#1a8bb5]"> Add to favorite</button>
             
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
