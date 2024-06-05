import { useEffect, useState } from "react";
import Banner from "./Banner";

const Home = () => {
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
    </div>
  );
};

export default Home;
