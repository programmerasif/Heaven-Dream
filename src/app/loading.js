"use client"
import Lottie from "lottie-react";
import Link from "next/link";
import loginAnimation from "@/app/LottieJsonFile/loginAnimation.json"

const Loading = () => {
    return (
        <>
          <div className="flex justify-center items-center">
              <Lottie animationData={loginAnimation} loop={true} />
            </div>
        </>
      );
    };

export default Loading;