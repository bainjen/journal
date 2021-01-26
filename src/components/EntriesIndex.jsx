import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import SingleEntry from "./SingleEntry";

const EntriesIndex = ({ journals }) => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  let allJournals = [];

  for (const [key, d] of Object.entries(journals)) {
    const journal = (
      <div key={key}>
        <h1>
          <Link to={`${url}/${d.path}`}>{d.title}</Link>
          <p>{d.date}</p>
          <p>{d.author}</p>
        </h1>
      </div>
    );

    allJournals.push(journal);
  }

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
