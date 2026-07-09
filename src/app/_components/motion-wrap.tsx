"use client";

import { motion } from "framer-motion";

interface MotionWrapProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MotionWrap: React.FC<MotionWrapProps> = ({
  children,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};



export default MotionWrap;