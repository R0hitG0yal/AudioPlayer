import React, { useState } from "react";
import { IconButton } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { AudioFile } from "./types"; 

interface AudioListProps {
  audioFiles: AudioFile[];
  onSelect: (file: AudioFile) => void;
  currentFileId: number;
}

const AudioList: React.FC<AudioListProps> = ({
  audioFiles,
  onSelect,
  currentFileId,
}) => {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="mb-[60px] pb-4 overflow-x-hidden">
      <div className="flex justify-end mb-4">
        <IconButton
          className="sm:size-20"
          onClick={() => setIsGridView(!isGridView)}
        >
          {isGridView ? <TableRowsIcon /> : <GridViewIcon />}
        </IconButton>
      </div>
      {isGridView ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 sm:gap-y-6 justify-evenly">
          {audioFiles.map((file) => (
            <div
              key={file.id}
              className={`text-slate-100 font-normal p-2 size-44  sm:text-2xl sm:p-6 sm:size-64 rounded-xl overflow-hidden m-auto shadow-2xl  ${
                currentFileId === file.id
                  ? "bg-slate-800 text-white"
                  : "bg-stone-700"
              }`}
              onClick={() => onSelect(file)}
            >
              <p>{file.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className="w-screen table-auto sm:text-xl font-serif sm:tracking-wider ">
          <thead>
            <tr>
              <th className="sm:text-3xl font-serif sm:tracking-wider ">Title</th>
            </tr>
          </thead>
          <tbody>
            {audioFiles.map((file) => (
              <tr
                key={file.id}
                className={`cursor-pointer ${
                  currentFileId === file.id ? "bg-slate-800 text-white" : ""
                }`}
                onClick={() => onSelect(file)}
              >
                <td className="px-2 m-2 sm:p-4 rounded-lg overflow-hidden">{file.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AudioList;
