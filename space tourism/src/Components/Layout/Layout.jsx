import React from 'react'
import { motion, useIsPresent } from "framer-motion";
import { Header } from '../Header/Header'

export const Layout = ( {children} ) => {
  const isPresent = useIsPresent();
  return (
    <section style={{ width: '100vw', height: '100vh' }}>
        <Header />
        {children}


        <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: .7, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: .7, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </section>


  )
}
