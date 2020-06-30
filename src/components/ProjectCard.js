import React from "react";
import Tag from "./Tag";

const tags = [
  {
    name: "tag1",
  },
  {
    name: "tag2",
  },
  {
    name: "tag3",
  },
];

function ProjectCard({ title, date, description }) {
  return (
    <div className="flex content-center flex-col mx- px-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <p className="font-bold text-gray-700 text-xl mb-2">{title}</p>
        </div>
        <div className="px-6">
          <p className="font-bold text-gray-700 text-sm mb-2">{date}</p>
        </div>
        <div className="text-gray-700 text-base px-6 py-4">
          <p> {description} </p>
        </div>
        <div>
          {tags.map((tag) => (
            <Tag tagName={tag.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
