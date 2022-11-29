"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-6 h-6 object-contain" />
      <h1 className="font-extrabold text-2xl text-white uppercase">METAVERSUS</h1>
      <img src="/menu.svg" alt="search" className="w-6 h-6 object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
