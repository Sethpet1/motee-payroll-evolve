import { motion } from "framer-motion";

const WavyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M-200 450 Q 180 300 560 450 T 1340 450 T 2120 450"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 0.5, opacity: 0.5 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
       
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WavyBackground; 