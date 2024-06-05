import { useLoaderData, useParams } from "react-router-dom";
import { listedData } from "./LocaleStore";
import DocumentTitle from "./DocumentTitle";

const DetailsInner = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const numberId = parseInt(id);

  const data2 = data.find((data) => data.id == id);
  console.log(data2);
  DocumentTitle(`Deluxe | ${data2.estate_title}`);
  return (
    <div className="flex  md:flex-row flex-col gap-4 mt-10">
      <img
        src={data2.image}
        className=" md:max-w-[70%]  md:min-w-80 rounded-xl"
      ></img>

      <div>
        <h1 className="md:text-3xl text-2xl">{data2.estate_title}</h1>
        <p className="text-gray-700 mt-3"> {data2.location}</p>

        <p className="mt-3">
          <span className="font-bold ">description: </span> {data2.description}
        </p>
        <span className="font-bold">Facilities</span>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {data2.facilities.map((tag) => (
            <div className=" border p-1 rounded-full px-3 bg-green-100 text-green-600">
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t-2 mt-4 pt-6 ">
          <div className="flex gap-16 ">
            <span className="text-gray-700:">Price:</span>{" "}
            <span className="font-bold">{data2.price}</span>
          </div>
          <div className="flex gap-16 ">
            <span className="text-gray-700:">status:</span>{" "}
            <span className="font-bold">{data2.status}</span>
          </div>
          <div className="flex gap-16">
            <span className="text-gray-700:">Area:</span>{" "}
            <span className="font-bold">{data2.area}</span>
          </div>
          <div className="flex gap-16 ">
            <span className="text-gray-700:">Location:</span>{" "}
            <span className="font-bold">{data2.location}</span>
          </div>
        </div>
        <button
          className="btn btn-success mt-10 text-white"
          onClick={() => listedData(numberId)}
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default DetailsInner;
