import React from "react";
import AboutCard from "../Components/AboutCard";
import Rev_AboutCard from "../Components/Rev_AboutCard";
import aboutData from "../Components/AboutData";

const About = () => {
  return (
    <div className="about h-auto w-full">
      <center className="text-3xl text-blue-400 fun-font p-3">
        About The Predictor....
      </center>

      <div className="flex flex-col items-center justify-center gap-10 p-5">
        {aboutData.map((item, index) =>
          index % 2 === 0 ? (
            <AboutCard
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              features={item.features}
              howItWork={item.howItWork}
              goal={item.goal}
            />
          ) : (
            <Rev_AboutCard
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              features={item.features}
              howItWork={item.howItWork}
              goal={item.goal}
            />
          )
        )}
      </div>
    </div>
  );
};

export default About;
