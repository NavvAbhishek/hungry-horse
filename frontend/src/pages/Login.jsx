import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="flex items-center justify-center">
      <form action="" className="text-darkBlue">
        <h2 className="mt-20 text-center text-4xl font-bold">{currentState}</h2>
        <div className="mt-6 flex flex-col gap-5 ">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your name"
              className="border-2 px-4 py-2 border-darkBlue rounded-lg"
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            className="border-2 px-4 py-2 border-darkBlue rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border-2 px-4 py-2 border-darkBlue rounded-lg"
            required
          />
        </div>
        <div className="text-center">
          {currentState === "Register" ? (
            <button className="blueBtn px-2 py-2 mt-5"> Create Account </button>
          ) : (
            <button className="blueBtn px-3 py-[5px] mt-5">Login </button>
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
