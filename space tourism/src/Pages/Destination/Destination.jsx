import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../../Components/Layout/Layout";

import "./Destination.css";

import { destinations } from "./Destination";

export const Destination = () => {
  const [selectTab, setselectTab] = useState(destinations[0]);

  return (
    <>
      <Layout>
        <section className="DestinationSection">
          <div className="ContPlanet">
            <h2 className="titlePlanet">01 PICK YOUR DESTINATION</h2>
            <div className="imgPlanet" style={{ backgroundImage: `url(${selectTab.images.webp})` }}></div>
          </div>
          <div className="ContPlanetInfo">
            <nav>
              <ul>
                {destinations.map((destin, key) => {
                  return (
                    <li
                      key={key}
                      className={destin === selectTab ? "selected" : ""}
                      onClick={() => setselectTab(destin)}
                    >
                      {destin.name}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectTab ? selectTab.name : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="planetInfo"
              >
                <h1>{selectTab.name}</h1>
                <p>{selectTab.description}</p>
                <hr></hr>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <sub>AVG. DISTANCE</sub>
                    <h1 style={{ fontSize: '2em' }}>{selectTab.distance}</h1>
                  </div>
                  <div>
                    <sub>AVG. DISTANCE</sub>
                    <h1 style={{ fontSize: '2em' }}>{selectTab.travel}</h1>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </Layout>
    </>
  );
};
