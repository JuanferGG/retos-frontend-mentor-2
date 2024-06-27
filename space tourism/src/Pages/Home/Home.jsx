import React from "react";
import { motion } from "framer-motion";
import { Layout } from "../../Components/Layout/Layout";

import { Link } from 'react-router-dom'

import "./Home.css";

export const Home = () => {

  return (
    <>
      <Layout>
        <section
          className="HomeSection"
        >
          <motion.section
            className="left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: .7 }}
          >
            <h2>So, you want to travel to</h2>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </motion.section>
          <motion.div
            className="right"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link to='/destination'>EXPLORE</Link>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};
