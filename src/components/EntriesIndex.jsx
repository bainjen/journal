import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import SingleEntry from "./SingleEntry";

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
  return (
    <main>
      <Switch>
        <Route exact path={path}>
          {allJournals}
        </Route>
        <Route path={`${path}/:journalId`}>
          <SingleEntry />
        </Route>
      </Switch>
    </main>
  );
};

export default EntriesIndex;
