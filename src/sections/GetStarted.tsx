"use client";
import { motion } from "framer-motion";

import { StartSteps, TitleText, TypingText } from "@/components";
import { startingFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className={`flex flex-col md:flex-row  mx-auto ${styles.innerWidth} gap-8 `}
    >
      <motion.div variants={planetVariants("left")} className={`${styles.flexCenter} flex-1`}>
        <img src="/get-started.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
      <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| How Metaverus Works" />
        <TitleText title="Get started with just a few clicks" textStyles="leading-[1.2]" />
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]"
        >
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={`${index < 10 ? "0" : ""} ${index + 1}`} text={feature} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
