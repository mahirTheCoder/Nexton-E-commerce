import React, { useState } from "react";
import axios from "axios";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [Error, setError] = useState({
    emailError: "border-gray-300",
    passError: "border-gray-300",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.email) {
      setError((prev) => ({ ...prev, emailError: "border-red-500" }));
    }
    if (!form.password) {
      setError((prev) => ({ ...prev, passError: "border-red-500" }));
    }

    // ------------ API Integration (Example) ------------
    axios
      .post("https://api.freeapi.app/api/v1/users/login", {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        navigate("/");
        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((err) => {
        toast.error("Invalid email or password", {
          position: "top-right",
          autoClose: 4000,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="my-25  flex items-center justify-center ">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Email */}
          <label className="block">
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-md border ${Error.emailError} bg-gray-50`}
            >
              <FiMail className="text-gray-500" />
              <input
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, email: e.target.value }));
                  setError((prev) => ({
                    ...prev,
                    emailError: "border-gray-300",
                  }));
                }}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </label>

          {/* Password */}
          <label className="block">
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-md border ${Error.passError} bg-gray-50`}
            >
              <FiLock className="text-gray-500" />
              <input
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, password: e.target.value }));
                  setError((prev) => ({
                    ...prev,
                    passError: "border-gray-300",
                  }));
                }}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="text-gray-500 p-1 rounded-md hover:bg-gray-100"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-medium hover:bg-gray-900"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to={"/Register"} className="text-indigo-600 font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
