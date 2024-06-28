import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../../Components/Layout/Layout";

import { crewObject } from "./CrewObject";

import "./Crew.css";

export const Crew = () => {
  const [selectTab, setSelectTab] = useState(crewObject[0]);

  return (
    <>
      <Layout>
        <section className="CrewSection">
          <motion.div 
            className="left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: .7 }}
          >
            <h1 style={{ margin: "3em 0" }}>02 MEET YOUR CREW</h1>
            <AnimatePresence mode="wait">
              <motion.div
                className="infoCrew"
                key={selectTab ? selectTab.name : ""}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <sub>{selectTab.role}</sub>
                <h1>{selectTab.name}</h1>
                <p>{selectTab.bio}</p>
              </motion.div>
            </AnimatePresence>
            <div className="circles">
              {crewObject.map((circle, key) => {
                return (
                  <li
                    key={key}
                    onClick={() => setSelectTab(circle)}
                    className={`circle ${circle === selectTab ? "activeCircle" : ""
                      }`}
                  ></li>
                );
              })}
            </div>
          </motion.div>
          <motion.div 
            className="right"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: 1 }}
          >
            <div className="imgCrew" style={{ backgroundImage: `url(${selectTab.images.webp})` }}></div>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};
