import { draw } from "../utils/draw";
import { motion } from "framer-motion";

const Circle = ({className}) => {
  return (
    <svg
      width="130"
      height="145"
      viewBox="0 0 130 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <motion.path
        variants={draw}
        initial="hidden"
        animate="visible"
        d="M65.7849 5.22122C60.1908 5.22122 54.7815 10.9274 50.7167 14.1054C33.2705 27.7451 21.1415 43.997 11.2607 63.9262C-7.97973 102.733 22.699 131.31 60.0363 137.786C75.3175 140.437 102.136 142.244 112.906 128.641C123.903 114.749 127.749 99.5077 121.877 82.3912C111.379 51.7911 87.992 17.7626 55.2458 8.3568C51.4053 7.25365 31.9203 2.39993 29.7257 6.78901"
        stroke="#2B60EA"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Circle;
