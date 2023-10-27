import { draw } from "../utils/draw"; 
import { motion } from "framer-motion";

const Check = ({className}) => {
  return (
    <svg
      width="87"
      height="99"
      viewBox="0 0 87 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}

    >
      <motion.path
       variants={draw}
       initial="hidden"
       animate="visible"
        d="M5.10699 70.7717C5.10699 74.278 6.63526 93.7659 12.0749 93.7659C13.0836 93.7659 13.9575 91.4601 14.0782 91.24C18.43 83.3045 23.6445 76.0069 28.9722 68.6813C45.344 46.1701 62.2566 24.5966 81.9286 4.92459"
        stroke="#2B60EA"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Check;
