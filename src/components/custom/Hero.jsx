import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LogInContext } from "@/Context/LogInContext/Login";

function Hero() {
  const { isAuthenticated } = useContext(LogInContext);
  return (
    <div className="flex items-center flex-col text-center justify-center h-auto">
      <div className="text px-10 md:px-40 flex flex-col items-center justify-center gap-4">
        <div className="heading">
          <h1 className="font-extrabold text-3xl md:text-[50px] leading-tight bg-gradient-to-r from-[#59BAE1] to-[#65539E] text-transparent bg-clip-text">
            Discover Your Next Adventure with AI: Journeasy
          </h1>
          <h3 className="font-extrabold opacity-70 text-xl md:text-[40px] leading-tight">
            Personalized Itineraries at Your Finger Tips
          </h3>
        </div>
        <div className="desc mt-5">
          <h5 className="text-[15px] md:text-2xl font-semibold opacity-40">
            Your Personal trip planner and travel curator, creating custom
            itineraries tailored to your interests and budget.
          </h5>
        </div>
        <div className="button">
          <Link to="/plan-a-trip">
            <Button className="">
              {isAuthenticated
                ? "Let's Make Another Trip"
                : "Plan a Trip, It's Free"}
            </Button>
          </Link>
        </div>
      </div>
      <div className="img">
        <img src="/travel.png" className="" alt="" />
      </div>
    </div>

    // <div className="flex flex-col items-center mx-4 md:mx-16 lg:mx-56 gap-6 md:gap-9">
    //   <h1 className="font-extrabold text-3xl md:text-4xl lg:text-[50px] text-center mt-8 md:mt-12 lg:mt-16 leading-tight lg:leading-[4rem]">
    //     <span className="bg-gradient-to-r from-[#59BAE1] to-[#65539E] text-transparent bg-clip-text">
    //       Discover Your Next Adventure with AI: Journeasy
    //     </span>
    //     <br />
    //     Personalized Itineraries at Your Finger Tips
    //   </h1>
    //   <p className="text-xl text-gray-500 text-center">
    //     Your Personal trip planner and travel curator, creating custom
    //     itineraries tailored to your interests and budget.
    //   </p>
    //   <div className="button">
    //     <Link to="/plan-a-trip">
    //       <Button className="">
    //         {isAuthenticated
    //           ? "Let's Make Another Trip"
    //           : "Plan a Trip, It's Free"}
    //       </Button>
    //     </Link>
    //   </div>
    //   <div className="img">
    //     <img src="/travel.png" className="" alt="" />
    //   </div>
    // </div>
  );
}

export default Hero;
