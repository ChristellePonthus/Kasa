import React from "react";

const Tags = ({ logement }) => {
  const tags = logement.tags.map((tag, index) => (
    <li className="tag" key={index}>
      {tag}
    </li>
  ));

  return <ul className="tags">{tags}</ul>;
};

export default Tags;
