"use client";

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  // const router = useRouter();

  return (
    <div className="p-2">
      <Head>
        <title>SIMPLE-URL-GETTER</title>
      </Head>
      <div>
        <div>
          <h1 className="text-amber-500 p-10 text-center text-6xl font-bold">
            SIMPLE URL GETTER
          </h1>
          <h2 className="text-amber-600 text-center text-4xl pb-10">
            avoid browser cors
          </h2>
          <form
            action="/api/get-it"
            method="GET"
            className="flex flex-col justify-center md:w-[50%] m-auto"
          >
            <input
              className="h-14 rounded-md pl-6"
              type="text"
              name="url"
              placeholder="https://www.random-site.com/picture.jpg"
            />
            <button type="submit" className="bg-amber-700 p-2 rounded-md mt-2 ">
              GET IT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
