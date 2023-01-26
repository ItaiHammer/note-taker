import "./Choice.css";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";

export default function (attributes) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="choice"
    >
      <FeatherIcon
        width="50"
        height="50"
        color="#7289da"
        icon={attributes.icon}
      />
    </motion.div>
  );
}
