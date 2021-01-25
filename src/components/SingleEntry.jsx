import React from "react";

const SingleEntry = ({ title, content, date, tags }) => {
  const tagList = tags.map((d, i) => {
    return <span key={i}>{d}</span>;
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{content}</p>
      {tagList}
    </div>
  );
};

export default SingleEntry;
