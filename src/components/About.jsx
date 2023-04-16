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
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
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
        <p className={styles.sectionSubText}>مقدمات</p>
        <h2 className={styles.sectionHeadText}>نمای کلی</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[28px]">
        برنامه نویسی که همواره در تلاشه که چیزای بیشتری یاد بگیره و علاقه ی
        زیادی به جاوا اسکریپت و ریکت و نود جی اس داره اما باعث نمیشه که از تجربه
        های جدید دست بکشه , پس میره تا دارت و فلاتر رو یاد بگیره و تبدیل میشه به
        برنامه نویس موبایل و الان که شما این متن رو میخونی معلوم نیست رفته سراغ
        چی ... <br />
        خلاصه که از یادگیری دست نمیکشه و عاشق برنامه نویسی هستش :)
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About , "about");
