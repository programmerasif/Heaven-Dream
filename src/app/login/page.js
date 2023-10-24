"use client"
import Lottie from "lottie-react";
import Link from "next/link";
import loginAnimation from "@/app/LottieJsonFile/loginAnimation.json"



const Login = () => {

    return (
        <>
    <div className="grid sm:grid-flow-col md:grid-cols-2 sm:w-full md:w-[90%] mx-auto justify-center items-center mt-32">
      {/* left for lotti */}
      <div className="text-center lg:text-left md:w-[700px] sm:[w-200px]">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>

      {/* right for form */}

      <div>
        <form className="border-2 drop-shadow-xl rounded-md px-12 w-3/4 py-20 bg-slate-50">
          <h1 className="text-blue-400 font-bold text-4xl text-center mb-4">Login</h1>
          <div className="w-full flex flex-col justify-center gap-6">
            
            <div className="flex gap-6 items-center">
              <label className="label">
                <span className="text-lg font-bold">Email</span>
              </label>
              <input
                type="text"
              //   {...register("email", { required: true })}
                placeholder="email"
                className="border h-12 rounded-lg pl-4 w-2/3"
              />
              {/* {errors.email && (
                <span className="text-red-500">Name is required</span>
              )} */}
            </div>
            <div className="flex gap-6 items-center">
              <label className="label">
                <span className="text-lg font-bold">Password</span>
              </label>
              <input
                type="password"
              //   {...register("password", {
              //     required: true,
              //     minLength: 6,
              //     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              //   })}
                placeholder="password"
                className="border h-12 rounded-lg pl-4 w-2/3"
              />
              {/* {errors.password && (
                <span className="text-red-500">Password is required</span>
              )} */}
              {/* {errors.password?.type == "minLength" && (
                <span className="text-red-500">
                  Password should be 6 character
                </span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="text-red-500">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </span>
              )} */}
            </div>
            
           
          </div>

          <div className="mt-6 bg-blue-500 text-white w-24 rounded-lg px-4 py-2 mx-auto">
            <input type="submit" value="LOGIN" className="btn" />
          </div>
          <p>
            Have an Account?
            <Link href="/login">
              <span className="text-blue-700">Login</span>
            </Link>{" "}
          </p>
        </form>
        {/* <SocialLogin></SocialLogin> */}
      </div>
    </div>
  </>
    ) 
};

export default Login;