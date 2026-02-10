import React from "react";
import TeamCard from "../Components/TeamCard";
import { motion } from "framer-motion";

const Teams = () => {
  return (
    <div className="teams h-auto w-full flex flex-col justify-around items-center p-5">
      {/* top heading  */}
      <div className="flex justify-center items-center">
        <motion.p initial={{y:200,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5}} className="fun-font font-bold tracking-wide text-6xl leading-20 text-center text-blue-200">
          The Minds behind the Predictor
        </motion.p>
      </div>

      {/* mentor-card */}
      <div className="teams-page h-auto w-full flex justify-around items-center flex-col p-3 mt-10">
        <div className="mentor h-110 w-85 card-border bg-[#2f3640] rounded-xl p-2 flex justify-center items-center flex-wrap ease-in duration-300 sm:h-110 sm:w-130 lg:h-80 lg:w-200">
          <img
            src="https://storage.googleapis.com/pictographic/thumbnails/lined/SXZGFGDYWdXmjPSvoC0y.png"
            className="w-60 h-50 p-1 object-cover rounded lg:w-60 lg:h-60"
          />
          <motion.div initial={{x:-200,opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.6}} className="about-mentor p-3 m-2 pop-font text-white flex justify-around flex-col gap-2">
            <h2 className="fun-font text-2xl text-white">Our Mentor...</h2>
            <p className="pop-font text-3xl text-amber-300 lg:text-4xl">
              Prof. Inadyuti Dutt
            </p>
            <p className="pop-font p-2 lg:p-3">
              H.O.D-Department of Computer Application
              <br />
              B.P Poddar Institute of Management and Technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* team-cards */}
      <div className="h-auto w-full flex justify-center items-center mt-3 flex-wrap p-4 gap-10">
        <TeamCard
          m_img="https://storage.googleapis.com/pictographic/thumbnails/flat-modern/2vFGAAfCuatQhKHWN94y.png"
          m_name="Sagar Dey"
          m_role="Backend- Selecting Model, Sentiment Analysis and Server building"
          m_mail=""
          m_facebook=""
          m_linkdin=""
          m_git=""
        />
        <TeamCard 
          m_img="https://storage.googleapis.com/pictographic/thumbnails/flat-modern/6nrnFehNwrEMOmHKrIYn.png"
          m_name="Subhankar Pal"
          m_role="Collecting DataSets and Data Pre-processing, Project cordinating"
          m_mail=""
          m_facebook=""
          m_linkdin=""
          m_git=""
        />
        <TeamCard 
          m_img="https://storage.googleapis.com/pictographic/thumbnails/purple/Rz7Fvlcn41WMS58QCSA5.png"
          m_name="Rohan Hazra"
          m_role="Frontend- Building UI and Connecting Backend to Frontend"
          m_mail=""
          m_facebook=""
          m_linkdin=""
          m_git=""
        />
        <TeamCard 
          m_img="https://storage.googleapis.com/pictographic/thumbnails/flat-modern/mT1G4HZD0PiFB8R8TD1C.png"
          m_name="Suraj Yadav"
          m_role="Collecting DataSets and Data Pre-processing, Building UI and Connecting Backend to Frontend"
          m_mail=""
          m_facebook=""
          m_linkdin=""
          m_git=""
        />
        <TeamCard 
          m_img="https://storage.googleapis.com/pictographic/thumbnails/purple/T3MPJbTxD4Qc9GJomNVO.png"
          m_name="Sukumar Mondal"
          m_role=" UI Building and Connecting Backend to Frontend, scraping data from amazon and collecting datasets"
          m_mail=""
          m_facebook=""
          m_linkdin=""
          m_git=""
        />
      </div>
    </div>
  );
};

export default Teams;
