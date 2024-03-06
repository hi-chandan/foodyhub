import React from "react";
import tw from "tailwind-styled-components";
import { BASE_URL } from "../../App";
// {
//     "name": "Boilded Egg",
//     "price": 10,
//     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     "image": "/images/egg.png",
//     "type": "breakfast"
// }

const SearchResult = ({ data }) => {
  return (
    <section className="bg-[url('/bg.png')] bg-cover h-[685px] bg-no-repeat border-2 border-red-600 w-screen flex justify-center items-center">
      <div className="flex flex-wrap w-3/4 gap-4">
        {data?.map((food) => (
          <div className=" ">
            <div className="bg-[#403730] flex w-[360px] h-[180px] p-2 ">
              <img src={BASE_URL + food.image} alt="" />
              <div className="">
                <h1>{food.name}</h1>
                <p>{food.text}</p>
                <button className="bg-red-600 p-1 w-16 float-right  m-2 rounded-lg">
                  {food.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
