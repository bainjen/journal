import React from "react";
import { useRouteMatch } from "react-router-dom";

const EntriesIndex = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <main>
      <div>
        <h1>TITLE</h1>
        <p>date</p>
      </div>
      <div>
        <h1>TITLE</h1>
        <p>date</p>
      </div>
    </main>
  );
};

export default EntriesIndex;
