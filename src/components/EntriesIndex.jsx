import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import SingleEntry from "./SingleEntry";

const StyledTitle = styled.h1`
  font-family: "Lobster", cursive;
  color: ${({ theme }) => theme.entryTitleColor};
`;

const EntriesIndex = ({ journals }) => {
  let { path, url } = useRouteMatch();

  let allJournals = [];

  for (const [key, d] of Object.entries(journals)) {
    const journal = (
      <div key={key}>
        <StyledTitle>
          <Link to={`${url}/${d.path}`}>{d.title}</Link>
        </StyledTitle>
        <p>{d.date}</p>
        <p>{d.author}</p>
        <Link onClick={() => console.log("onclick")} to={`/edit/${d.path}`}>
          {d.title}
        </Link>
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
          <SingleEntry journals={journals} />
        </Route>
      </Switch>
    </main>
  );
};

export default EntriesIndex;
