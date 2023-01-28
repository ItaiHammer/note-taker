import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

// compoenents
import Choice from "../components/Choice.jsx";

// file imports
import "./Choices.css";

export default function (attributes) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="App-choice"
    >
      <p>What would you like me to take notes on?</p>
      <div className="App-choice-row">
        <Choice
          icon="youtube"
          setPage={attributes.setPage}
          pageName="youtube"
        />
        <Choice text="Coming Soon!" />
      </div>
      <div className="App-choice-row">
        <Choice text="Coming Soon!" />
        <Choice text="Coming Soon!" />
      </div>
    </motion.div>
  );
}
