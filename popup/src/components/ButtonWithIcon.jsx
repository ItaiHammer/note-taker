import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';

// files
import './Choice.css';

export default function (attributes) {
    function switchChange() {
        if (attributes.pageName != null) {
            attributes.setPage(attributes.pageName);
        } else {
            attributes.click();
        }
    }

    return (
        <motion.button
            whileHover={attributes.hover ? { scale: [null, 1.2, 1.1] } : {}}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            onClick={switchChange}
            className="choice"
            style={attributes.style}
        >
            {' '}
            {attributes.icon != null ? (
                <FeatherIcon
                    width={attributes.iconWidth}
                    height={attributes.iconHeight}
                    color={
                        attributes.iconColor == null
                            ? 'white'
                            : attributes.iconColor
                    }
                    style={attributes.buttonStyle}
                    icon={attributes.icon}
                />
            ) : (
                attributes.text
            )}
        </motion.button>
    );
}
