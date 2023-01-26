import React, { useState } from 'react';
import { motion } from 'framer-motion';
import YoutubeTranscript from 'youtube-transcript';

// file imports
import './YouTube.css';

// components
import ButtonWithIcon from '../components/ButtonWithIcon';
import { useRef } from 'react';

export default function (attributes) {
    const [url, setUrl] = useState('');
    const textarea = useRef();

    // YoutubeTranscript.fetchTranscript(url).then(console.log);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="App-choice"
        >
            <p>Summerize a YouTube video</p>
            <input
                className="youtube-urlInput"
                placeholder="YouTube Link"
                ref={textarea}
            ></input>
            <ButtonWithIcon
                style={{
                    width: 200,
                    height: 50,
                    background: '#7289DA',
                    color: 'white',
                    fontWeight: 'bold',
                }}
                iconWidth={30}
                iconHeight={30}
                text="SUMMERIZE"
                click={() => {
                    setUrl(textarea.current.value);
                    console.log(url);
                }}
            />
        </motion.div>
    );
}
