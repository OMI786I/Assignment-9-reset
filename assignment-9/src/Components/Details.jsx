const Details = ({ data1 }) => {
  const {
    estate_title,
    image,
    description,
    status,
    area,
    location,
    facilities,
  } = data1;

  return (
    <div className="flex flex-col gap-11 mt-10 xl:w-96  border p-10 rounded-xl ">
      <div>
        <img src={image} className="  max-h-60 w-full rounded-xl"></img>
      </div>
      <div>
        <h1 className="md:text-3xl text-2xl">{estate_title}</h1>
        <p className="text-gray-700 mt-3 font-bold"> {description}</p>
        <div className=" border-t-2 border-b-2 p-1 mt-3 ">{status}</div>
        <p className="mt-3">
          <span className="font-bold block ">Area </span> {area}
          <span className="font-bold block ">Location </span> {location}
        </p>

        <div className="flex gap-2 mt-3">
          <span className="font-bold">Facilities:</span>
          <div className="grid grid-cols-2 gap-3">
            {" "}
            {facilities.map((tag) => (
              <div className=" border p-1 rounded-full px-3 bg-green-100 text-green-600">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-7">
          <button className="btn"> View Property </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
