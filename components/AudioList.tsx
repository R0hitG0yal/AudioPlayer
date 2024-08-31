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
            <div key={file.id}>
              <div
                className={`size-44 sm:size-64 rounded-xl  m-auto shadow-2xl  ${
                  currentFileId === file.id
                    ? "shadow-green-600 text-black"
                    : "bg-stone-700"
                }`}
                onClick={() => onSelect(file)}
              >
                <img
                  src={file.poster}
                  alt={file.name}
                  className="w-full h-auto"
                />
              </div>
              <p className=" sm:text-lg font-normal text-green-800 my-4 text-center mx-auto overflow-hidden">
                {file.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <table className="w-screen table-auto sm:text-xl font-serif sm:tracking-wider ">
          <thead>
            <tr>
              <th className="sm:text-3xl font-serif sm:tracking-wider ">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {audioFiles.map((file) => (
              <tr
                key={file.id}
                className={`cursor-pointer ${
                  currentFileId === file.id ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => onSelect(file)}
              >
                <td className="flex px-2 m-2 sm:p-2 rounded-lg overflow-hidden">
                  <img
                    src={file.poster}
                    alt={file.name}
                    className="w-12 h-auto"
                  />
                  <p className="ml-4 flex items-center ">{file.name}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AudioList;
