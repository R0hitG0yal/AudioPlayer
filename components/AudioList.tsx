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
    <div className="mb-[8%] pb-4">
      <div className="flex justify-end mb-4">
        <IconButton
          className="size-20"
          onClick={() => setIsGridView(!isGridView)}
        >
          {isGridView ? <TableRowsIcon /> : <GridViewIcon />}
        </IconButton>
      </div>
      {isGridView ? (
        <div className="grid grid-cols-4 gap-6">
          {audioFiles.map((file) => (
            <div
              key={file.id}
              className={`text-slate-100 font-normal text-2xl p-6 h-72 w-72 rounded-xl overflow-y-hidden m-auto shadow-2xl  ${
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
        <table className="w-full table-auto text-xl font-serif tracking-wider ">
          <thead>
            <tr>
              <th className="text-3xl font-serif tracking-wider ">Title</th>
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
                <td className="p-2 rounded-lg">{file.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AudioList;
