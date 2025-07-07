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
      initial={{ y: 50, opacity: 0 }} // Posisi awal: 50px di bawah dan transparan
      whileInView={{ y: 0, opacity: 1 }} // Posisi akhir: di tempatnya dan terlihat
      viewport={{ once: true }} // Animasi hanya berjalan sekali
      transition={{ duration: 0.5, delay }} // Durasi dan delay animasi
      className={className}
    >
      {children}
    </motion.div>
  );
};



export default MotionWrap;