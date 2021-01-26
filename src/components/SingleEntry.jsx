import React from "react";
import { useParams } from "react-router-dom";

const SingleEntry = ({ title, content, date, tags }) => {
  const { journalId } = useParams();

  // allJournals.find(d => d.path === journalId)

  // const tagList = tags.map((d, i) => {
  //   return <span key={i}>{d}</span>;
  // });

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{content}</p>
      {/* {tagList} */}
    </div>
  );
};

export default SingleEntry;
