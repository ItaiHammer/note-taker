import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import YouTubeMp3Downloader from "youtube-mp3-downloader";
import { Deepgram } from "@deepgram/sdk";
import ffmpeg from "ffmpeg";

// file imports
import "./YouTube.css";

// components
import ButtonWithIcon from "../components/ButtonWithIcon";
import { useRef } from "react";

export default function (attributes) {
  const [url, setUrl] = useState("");
  const textarea = useRef();

  const YD = new YouTubeMp3Downloader({
    ffmpegPath: ffmpeg,
    outputPath: "./",
    youtubeVideoQuality: "highestaudio",
  });

  const deepgram = new Deepgram(process.env.DG_KEY);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    console.log(url);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
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
          background: "#7289DA",
          color: "white",
          fontWeight: "bold",
        }}
        iconWidth={30}
        iconHeight={30}
        text="SUMMERIZE"
        click={() => {
          setUrl(textarea.current.value);

          YD.download(url);

          YD.on("finished", async (arr, video) => {
            const videoname = video.file;
            console.log(videoname + " has been downloaded!");
            let buffer;
            const result = await deepgram.transcription.preRecorded(
              {
                buffer,
                mimetype: "audio/mp3",
              },
              {
                punctuate: true,
                utterances: true,
              }
            );

            console.log(result.toWebVTT);
          });
        }}
      />
    </motion.div>
  );
}
