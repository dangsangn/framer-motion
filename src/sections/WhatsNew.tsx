"use client";
import { motion } from "framer-motion";

import { NewFeatures, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className={`flex flex-col md:flex-row-reverse mx-auto ${styles.innerWidth} gap-8`}
    >
      <motion.div variants={planetVariants("right")} className={`${styles.flexCenter} flex-1`}>
        <img src="/whats-new.png" alt="whats new" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
      <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| Whats New?" />
        <TitleText title="What's new about Metaversus?" textStyles="leading-[1.2]" />
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="mt-[31px] flex gap-[24px] md:gap-[46px]"
        >
          {newFeatures.map((feature, index) => (
            <NewFeatures key={index} {...feature} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
