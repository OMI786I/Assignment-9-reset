import { useEffect, useState } from "react";
import { getStoredListedData } from "./LocaleStore";

const Wishlist = () => {
  const [listData, setListData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const storedId = getStoredListedData();
    if (data.length > 0) {
      const listedData = data.filter((data2) => storedId.includes(data2.id));
      setListData(listedData);
    }
  }, [data]);

  console.log(listData);

  return <div>This is wishlist</div>;
};

export default Wishlist;
