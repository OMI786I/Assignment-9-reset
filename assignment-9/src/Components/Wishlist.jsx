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
    console.log(storedId);
    if (data.length > 0) {
      const listedData = data.filter((data2) => storedId.includes(data2.id));
      setListData(listedData);
    }
  }, [data]);
  console.log(listData);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Area</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {listData.map((data1) => (
              <tr key={data1.id}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data1.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data1.estate_title}</div>
                      <div className="text-sm opacity-50">{data1.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {data1.status}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Price:{data1.price}
                  </span>
                </td>
                <td>area: {data1.area}</td>
                <th>
                  <button className="btn btn-warning btn-xs">Remove</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
