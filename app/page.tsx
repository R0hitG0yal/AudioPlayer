"use client";
import { useState } from "react";
import UploadAudio from "../components/UploadAudio";
import AudioList from "../components/AudioList";
import AudioPlayer from "../components/AudioPlayer";
import { AudioFile } from "../components/types";

export default function Home() {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [currentFileId, setCurrentFileId] = useState<number | null>(null);

  const handleUpload = (files: AudioFile[]) => {
    setAudioFiles(files);
    if (files.length && currentFileId === null) {
      setCurrentFileId(files[0].id);
    }
  };

  const handleSelect = (file: AudioFile) => {
    setCurrentFileId(file.id);
  };

  const handleNext = () => {
    const currentIndex = audioFiles.findIndex(
      (file) => file.id === currentFileId
    );
    if (currentIndex !== -1 && currentIndex < audioFiles.length - 1) {
      setCurrentFileId(audioFiles[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    const currentIndex = audioFiles.findIndex(
      (file) => file.id === currentFileId
    );
    if (currentIndex > 0) {
      setCurrentFileId(audioFiles[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden sm:p-4 font-[Rock Serodaz]">
      <UploadAudio onUpload={handleUpload} />
      <AudioList
        audioFiles={audioFiles}
        onSelect={handleSelect}
        currentFileId={currentFileId!}
      />
      {currentFileId && (
        <AudioPlayer
          audioFiles={audioFiles}
          currentFileId={currentFileId}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onEnded={handleNext}
        />
      )}
    </div>
  );
}
