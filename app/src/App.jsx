import styled from "styled-components";
import tw from "tailwind-styled-components";
import SearchResult from "./components/SearchResults/SearchResult";
import { useEffect, useState } from "react";

const btn = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];

export const BASE_URL = "http://localhost:9000";
export default function App() {
  const [getvalue, setvalue] = useState();
  const [filterdata, setfilterdata] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  const [type, settype] = useState("all");
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

  const typesearch = (type) => {
    if (type === "all") {
      setfilterdata(getvalue);
      settype("all");
      return;
    }
    const filter = getvalue?.filter((food) =>
      food.type.toLowerCase().includes(type)
    );
    setfilterdata(filter);
  };

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
          {btn.map((name) => (
            <button
              onClick={() => typesearch(name.type)}
              className="bg-red-500 w-20 m-2  p-1 rounded-md font-bold"
            >
              {name.name}
            </button>
          ))}
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
