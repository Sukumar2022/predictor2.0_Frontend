import React from "react";

const AboutCard = ({ id, img, title, desc, features }) => {
  return (
    <div className="aboutCard w-95 h-auto bg-[#1c1f22] rounded-2xl flex items-center justify-center flex-wrap p-4 ease-in duration-150 lg:w-260 lg:justify-around relative lg:gap-30">
      {/* ID Badge */}
      {id && (
        <span className="absolute top-10 right-10 text-white text-lg">
          {id}
        </span>
      )}

      {/* Text Section */}
      <div>
        <h2 className="text-2xl text-white text-right fun-font m-4">{title}</h2>

        {/* Description */}
        {desc && (
          <p className="text-blue-200 mt-2 text-sm w-90 p-2 text-justify lg:w-130">
            {desc}
          </p>
        )}

        {/* Features List */}
        {features && (
          <ul className="text-blue-200 list-disc ml-6 mt-2">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}
      </div>

      {img && (
        <img
          src={img}
          alt={title}
          className="h-60 w-80 rounded m-8 lg:ml-2 lg:text-lg"
        />
      )}
    </div>
  );
};

export default AboutCard;
