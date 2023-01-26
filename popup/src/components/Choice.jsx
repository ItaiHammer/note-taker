import React from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import FeatherIcon from 'feather-icons-react';

// files
import './Choice.css';

export default function (attributes) {
    function switchChange() {
        attributes.setPage(attributes.pageName);
    }

    return (
        <motion.button
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            onClick={switchChange}
            className="choice"
        >
            {attributes.icon == null ? (
                attributes.text
            ) : (
                <FeatherIcon
                    width="50"
                    height="50"
                    color="#7289da"
                    icon={attributes.icon}
                />
            )}
        </motion.button>
    );
}
