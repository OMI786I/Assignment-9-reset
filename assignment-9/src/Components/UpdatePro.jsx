import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import DocumentTitle from "./DocumentTitle";

const UpdatePro = () => {
  DocumentTitle("Deluxe | Update");
  const [showPassWord, setShowPassWord] = useState(false);
  const { updateUser, user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo);

    updateUser(name, photo)
      .then((result) => {
        toast.success("You have successfully updated. Refresh to see changes");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Toaster />
      <div className="flex flex-col md:flex-row items-center">
        <div>
          {user ? <img src={user.photoURL}></img> : ""}
          <div>
            {user ? (
              <div>
                <p>
                  <span className="font-bold">Name:</span> {user.displayName}
                </p>
                <p>
                  <span className="font-bold">email:</span> {user.email}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-3">Update now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleUpdate}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="image"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePro;
