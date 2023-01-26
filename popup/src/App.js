import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";

// file imports
import "./App.css";

// components
import Choice from "./components/Choice.jsx";

function App() {
  return (
    <div className="App">
      <motion.header
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="App-header"
      >
        <h1>Note Taker</h1>
      </motion.header>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        className="App-choice"
      >
        <p>What would you like me to take notes on?</p>
        <div className="App-choice-row">
          <Choice icon="youtube" />
          <Choice icon="twitter" />
        </div>
        <div className="App-choice-row">
          <Choice />
          <Choice />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
