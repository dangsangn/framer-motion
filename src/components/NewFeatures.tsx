"use client";
import { motion } from "framer-motion";

import { NewsFeatureProp } from "@/constants";
import styles from "@/styles";
import { opacity } from "@/utils/motion";

const NewFeatures = ({ imgUrl, title, subtitle }: NewsFeatureProp) => (
  <motion.div variants={opacity()} initial="hidden" whileInView="show" className="flex flex-col ">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
      <img src={imgUrl} alt={title} className="h-[20px] w-[16px] object-contain" />
    </div>
    <h3 className="text-[16px] sm:text-[24px] font-bold text-white mt-[24px]">{title}</h3>
    <p className="mt-[16px] font-normal text-[16px] text-secondary-white">{subtitle}</p>
  </motion.div>
);

export default NewFeatures;
