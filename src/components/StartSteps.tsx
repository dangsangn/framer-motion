"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

type StartStepsProp = {
  number: string;
  text: string;
};

const StartSteps = ({ number, text }: StartStepsProp) => (
  <motion.div variants={fadeIn("up", "spring", Number(number) * 0.5, 2)} className="flex">
    <div className="w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] text-center leading-[70px] text-white ">{number}</div>
    <div className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">{text}</div>
  </motion.div>
);

export default StartSteps;
