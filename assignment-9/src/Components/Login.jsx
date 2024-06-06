import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DocumentTitle from "./DocumentTitle";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  DocumentTitle("Deluxe | Login");
  const { signIn } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const { githubSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleGitHub = () => {
    githubSignIn().then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>Or signIn with</p>
            <div className="flex gap-4">
              <button className="btn" onClick={handleGoogle}>
                <FcGoogle className="text-3xl" />
              </button>
              <button className="btn" onClick={handleGitHub}>
                <FaGithub className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p>Have not Registered yet?</p>
      <Link to="/register">
        <span className="text-green-800 font-bold"> Register NOW!</span>
      </Link>
    </div>
  );
};

export default Login;
