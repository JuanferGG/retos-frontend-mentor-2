import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../../Components/Layout/Layout";

import { technologyObj } from "./TechnologyObject";

import "./Technology.css";

export const Technology = () => {
  const [selectTab, setSelectTab] = useState(technologyObj[0]);

  return (
    <>
      <Layout>
        <section className="TechnSection">
          <motion.div 
            className="left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: .7 }}  
          >
            <h1 className="title">03 SPACE LAUNCH 101</h1>
            <div className="infoContainer">
              <ul>
                {technologyObj.map((e, key) => {
                  return (
                    <li
                      className={selectTab === e ? "active" : ""}
                      onClick={() => setSelectTab(e)}
                      key={key}
                    >
                      {key + 1}
                    </li>
                  );
                })}
              </ul>
              <AnimatePresence mode='wait'>
                <motion.div
                  className='infoTech'
                  key={selectTab.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 10, opacity: 0 }}
                  transition={{duration: .6 }}
                >
                  <h2>THE TERMINOLOGY...</h2>
                  <h1>{selectTab.name}</h1>
                  <p>{selectTab.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            className="right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7, delay: 1 }}
          >
                <div style={{ backgroundImage: `url(${selectTab.images.portrait})` }}></div>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};
