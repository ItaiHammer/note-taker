import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import YoutubeTranscript from 'youtube-transcript';

// file imports
import './YouTube.css';

// components
import ButtonWithIcon from '../components/ButtonWithIcon';
import { useRef } from 'react';

export default function (attributes) {
    const [url, setUrl] = useState('');
    const textarea = useRef();

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
        console.log(url);
    };

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
                onChange={handleUrlChange}
                value={url}
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
                    console.log(
                        textarea.current.value.substring(
                            textarea.current.value.indexOf('v=') + 2
                        )
                    );
                    YoutubeTranscript.fetchTranscript(
                        textarea.current.value.substring(
                            textarea.current.value.indexOf('v=') + 2
                        )
                    ).then((e) => {
                        console.log(e);
                    });
                }}
            />
        </motion.div>
    );
}
