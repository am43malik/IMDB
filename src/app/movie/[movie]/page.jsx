"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove } from "@/app/store/movieSlice";
import Link from "next/link";

const fetchData = async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res;
};

const page = async ({ params }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const id = params.movie;
  const t = id.split("movie");
  const data = await fetchData(t[1]);

  const onsubmit = async (e) => {
    e.preventDefault();

    setText(text);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="mx-auto">
      <form onSubmit={onsubmit}>
        <Image
          src={`${data.data.image}`}
          width={150}
          height={300}
          className=" mx-auto"
        />
        {text}
        <h1 className="mx-auto text-center">{data.data.title}</h1>
        <h1 className="mx-auto text-center">$: {data.data.price}</h1>
        <Link href={"/"}>
          <button
            onClick={() => dispatch(remove(data.data.id))}
            className="bg-[#878f92] w-80 p-1 mx-auto  flex items-center justify-center text-black"
          >
            Remove Favorite
          </button>
        </Link>

        <div className="mx-auto flex justify-center p-5">
          Add Review :
          <div>
            <label htmlFor="">Name</label>

            <textarea
              id="myTextArea"
              // value={text}
              onChange={handleChange}
              rows={4}
              cols={50}
            />
          </div>
        </div>
        <button
          className="bg-[#1a8bb5] w-80 p-1 mx-auto  flex items-center justify-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
