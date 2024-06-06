import { useEffect, useState } from "react";
import Banner from "./Banner";
import Details from "./Details";
import DocumentTitle from "./DocumentTitle";

const Home = () => {
  DocumentTitle("Deluxe");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  // Luxury:Penthouse, Beachfront properties, resorts, private islands,Villas,Mensions
  return (
    <div>
      <Banner></Banner>
      <h1 className="mt-12 md:text-4xl text-2xl text-center">
        Available Estates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 ">
        {data.map((data1) => (
          <Details key={data1.id} data1={data1}></Details>
        ))}
      </div>
    </div>
  );
};

export default Home;
