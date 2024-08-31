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
    <div className="max-w-screen grid sm:grid-cols-3 items-center sm:gap-4 fixed bottom-0 left-0 right-0 sm:p-4 bg-gray-800 text-white overflow-hidden">
      <div className="overflow-hidden text-center sm:text-left">
        <p className="truncate overflow-hidden p-1 max-w-[80%] m-auto">{currentFile.name}</p>
      </div>
      <ReactAudioPlayer
        className="mx-auto h-8 sm:h-14 "
        src={currentFile.url}
        controls
        onEnded={onEnded}
      />
      <div className="flex justify-center sm:justify-end">
        <IconButton onClick={onPrevious} aria-label="previous">
          <SkipPreviousIcon className="text-white" />
        </IconButton>
        <IconButton onClick={onNext} aria-label="next">
          <SkipNextIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default AudioPlayer;
