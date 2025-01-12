import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly
          items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-containt" />
          <h3
            className="text-white text-[20px]
          font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextforCenter}>Introduction</p>
        <h2 className={styles.sectionHeadTextforCenter}>Overview.</h2>
      </motion.div>

      <motion.div className="flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px] text-center"
        >
          Telecommunications Engineering graduate from Telkom University (May
          2024) with expertise in Data Science and IoT. Experienced in Python
          programming, data preprocessing, and developing innovative solutions
          like an IoT-based smoke detection system. In my final project,
          successfully implemented a ResNet152V2 deep learning model for
          flatfoot detection with 84% accuracy. Completed advanced training in
          Machine Learning and Data Mining, along with online courses in deep
          learning and machine learning. Eager to leverage technical skills to
          drive impactful innovations in Data Science and AI.
        </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center itmes-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
