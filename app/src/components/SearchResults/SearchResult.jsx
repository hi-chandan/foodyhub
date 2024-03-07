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
    <section className="bg-[url('/bg.png')] bg-cover h-full sm:h-screen  w-screen flex justify-center items-start mt-4 bg-repeat-y ">
      <div className="h-3/6 w-full sm:w-4/5 flex flex-wrap   justify-center items-start mt-14 gap-4 p-2">
        {data?.map((food) => (
          <div
            key={food.name}
            className="bg-[#3F3B38] p-1 flex w-[360px] rounded-lg "
          >
            <img src={BASE_URL + food.image} alt="" />
            <div className="">
              <h1>{food.name}</h1>
              <p>{food.text}</p>
              <button className="bg-red-600 p-1 w-16 float-right  m-2 rounded-lg">
                {food.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
