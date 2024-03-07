import styled from "styled-components";
import tw from "tailwind-styled-components";
import SearchResult from "./components/SearchResults/SearchResult";
import { useEffect, useState } from "react";

// {
//     "name": "Boilded Egg",
//     "price": 10,
//     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     "image": "/images/egg.png",
//     "type": "breakfast"
// }

export const BASE_URL = "http://localhost:9000";
export default function App() {
  const [getvalue, setvalue] = useState();
  const [filterdata, setfilterdata] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchFoodData = async () => {
      setloading(true);

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setvalue(json);
        setfilterdata(json);
        setloading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchfood = (e) => {
    e.preventDefault();
    const getfilterdata = e.target.value;
    console.log("this is search", getfilterdata);

    if (getfilterdata === "") {
      setfilterdata(null);
    }
    const filter = getvalue?.filter((food) =>
      food.name.toLowerCase().includes(getfilterdata)
    );

    setfilterdata(filter);
  };
  console.log("This is loading value", loading);
  if (error) return <div>{error}</div>;
  return (
    <>
      <MainContainer>
        <TopContainer>
          <img src="/logo.svg" alt="" />
          <div className="p-2">
            <input
              type="text"
              className="p-2 rounded-lg text-white bg-transparent border-2 border-red-600"
              onChange={(e) => searchfood(e)}
              placeholder="Search Food..."
            />
          </div>
        </TopContainer>
        <div className=" text-center ">
          <button className="bg-red-500 w-20 m-2  p-1 rounded-md font-bold">
            All
          </button>
          <button className="bg-red-500 w-20 m-2 p-1 rounded-md font-bold">
            Breakfast
          </button>
          <button className="bg-red-500 m-2 w-20 p-1 rounded-md font-bold">
            Lunch
          </button>
          <button className="bg-red-500 m-2 w-20 p-1 rounded-md font-bold">
            Dinner
          </button>
        </div>
      </MainContainer>
      {loading ? "Loading..." : <SearchResult data={filterdata} />}
    </>
  );
}

const MainContainer = tw.div`

max-w-[1200px]
m-auto

`;

const TopContainer = tw.section`
min-h-[140px]
flex
justify-between
items-center
p-2



`;
