import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate()
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChnageHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const res = await axios.post(newUrl, data);

    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/")
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={onLogin} className="text-darkBlue">
        <h2 className="mt-20 text-center text-4xl font-bold">{currentState}</h2>
        <div className="mt-6 flex flex-col gap-5 ">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChnageHandler}
              placeholder="Your name"
              className="border-2 px-4 py-2 border-darkBlue rounded-lg"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChnageHandler}
            placeholder="Your email"
            className="border-2 px-4 py-2 border-darkBlue rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChnageHandler}
            placeholder="Enter password"
            className="border-2 px-4 py-2 border-darkBlue rounded-lg"
            required
          />
        </div>
        <div className="text-center">
          {currentState === "Register" ? (
            <button type="submit" className="blueBtn px-2 py-2 mt-5">
              {" "}
              Create Account{" "}
            </button>
          ) : (
            <button type="submit" className="blueBtn px-3 py-[5px] mt-5">
              Login{" "}
            </button>
          )}
        </div>
        <div className="mt-5">
          {currentState === "Register" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-darkRed font-semibold cursor-pointer"
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don&apos;t have an account?{" "}
              <span
                onClick={() => setCurrentState("Register")}
                className="text-darkRed font-semibold cursor-pointer"
              >
                Register
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
