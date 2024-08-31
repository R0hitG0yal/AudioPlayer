import React, { useState } from "react";
import { AudioFile } from "./types"; 

interface UploadAudioProps {
  onUpload: (files: AudioFile[]) => void;
}

const UploadAudio: React.FC<UploadAudioProps> = ({ onUpload }) => {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newAudioFiles = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      file,
      url: URL.createObjectURL(file),
    }));

    setAudioFiles([...audioFiles, ...newAudioFiles]);
    onUpload([...audioFiles, ...newAudioFiles]);
  };

  return (
    <div className="w-screen p-4 flex justify-center items-center shadow-2xl overflow-x-hidden">
      <input className="rounded-full sm:text-xl sm:font-600" type="file" accept="audio/*" multiple onChange={handleUpload} />
    </div>
  );
};

export default UploadAudio;
