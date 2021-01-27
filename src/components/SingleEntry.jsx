import React from "react";
import { useParams } from "react-router-dom";
import Preview from "./Preview";

const SingleEntry = ({ journals }) => {
  const { journalId } = useParams();
  const journalArray = Object.entries(journals);
  const [id, journal] = journalArray.find((d) => d[1].path === journalId);

  return (
    <div>
      <h1>{journal.title}</h1>
      <p>{journal.date}</p>
      <Preview markdownText={journal.content} />
      {/* {tagList} */}
    </div>
  );
};

export default SingleEntry;
