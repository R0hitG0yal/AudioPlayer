import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { IconButton } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { AudioFile } from "./types"; 

interface AudioPlayerProps {
  audioFiles: AudioFile[];
  currentFileId: number;
  onNext: () => void;
  onPrevious: () => void;
  onEnded: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioFiles,
  currentFileId,
  onNext,
  onPrevious,
  onEnded,
}) => {
  const currentFile = audioFiles.find((file) => file.id === currentFileId);

  if (!currentFile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white grid grid-cols-3 items-center gap-4">
      <div className="overflow-hidden">
        <p>{currentFile.name}</p>
      </div>
      <ReactAudioPlayer
      className="mx-auto"
        src={currentFile.url}
        controls
        autoPlay
        onEnded={onEnded}
      />
      <div className="flex items-center justify-end">
        <IconButton onClick={onPrevious} color="inherit">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={onNext} color="inherit">
          <SkipNextIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AudioPlayer;
