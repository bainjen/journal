import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const EntriesIndex = ({ journals }) => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  const allJournals = journals.map((d, i) => {
    return (
      <div>
        <h1>
          <Link to={`${url}/${d.path}`}>{d.title}</Link>
          <p>{d.date}</p>
          <p>{d.author}</p>
        </h1>
      </div>
    );
  });
  return <main>{allJournals}</main>;
};

export default EntriesIndex;
