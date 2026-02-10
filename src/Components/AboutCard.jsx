import { motion } from "framer-motion";
import React from "react";

const AboutCard = ({ id, img, title, desc, howItWork }) => {
  return (
    <motion.div initial={{x:-400,opacity:0}} animate={{x:0, opacity:1}} className="aboutCard w-95 h-auto bg-[#1c1f22] rounded-2xl flex items-center justify-center flex-wrap p-4 ease-in duration-150 lg:w-260 lg:justify-around relative lg:gap-30">
      {/* ID */}
      {id && (
        <span className="absolute top-10 right-10 text-white text-lg">
          {id}
        </span>
      )}

      {/* Image */}
      {img && (
        <img src={img} alt={title} className="h-60 w-80 rounded lg:ml-10" />
      )}

      {/* Content */}
      <div>
        <h2 className="text-2xl text-white text-right fun-font m-4">{title}</h2>

        {/* Normal Description */}
        {desc && (
          <p className="text-blue-200 mt-2 text-sm w-90 p-2 text-justify lg:w-130">
            {desc}
          </p>
        )}

        {/* How It Works Steps */}
        {howItWork && (
          <div className="mt-3 space-y-2 p-2 bg-[#232322] pop-font lg:p-0 lg:rounded">
            {howItWork.map((step) => (
              <div key={step.id} className="m-2 w-75 lg:m:0 lg:w-120 lg:p-1">
                <h4 className="text-white font-semibold text-lg lg:text-sm">
                  {step.id}. {step.title}
                </h4>
                <p className="text-blue-200 text-xs ml-2">{step.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AboutCard;
