import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import FeatherIcon from 'feather-icons-react';
import React from 'react';

// file imports
import './App.css';

// components
import Choice from './components/Choice.jsx';
import Switch from './components/Switch';

// pages
import ChoicesPage from './pages/Choices.jsx';
import YouTubePage from './pages/YouTube.jsx';
import ButtonWithIcon from './components/ButtonWithIcon';

function App() {
    const [page, setPage] = useState('choices');
    const [mode, setMode] = useState('summery');

    console.log(page);

    return (
        <div className="App">
            <motion.header
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="App-header"
            >
                <ButtonWithIcon
                    style={{ width: 30, height: 30, background: 'none' }}
                    icon="home"
                    setPage={setPage}
                    pageName="choices"
                    hover={false}
                />
                <h1>Note Taker</h1>
                <Switch />
            </motion.header>
            {page == 'choices' ? (
                <ChoicesPage setPage={setPage} />
            ) : page == 'youtube' ? (
                <YouTubePage />
            ) : (
                <></>
            )}
        </div>
    );
}

export default App;
