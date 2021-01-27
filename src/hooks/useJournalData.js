import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { makePath } from "../utils/helpers";

const seedJournals = {
  test1: {
    path: "bananagrams",
    title: "Bananagrams",
    author: "Mickey Mouse",
    username: "test",
    date: "01-20-2021",
    content: "This is my blog post",
    tags: ["hello", "blog", "trees"],
  },

  test2: {
    path: "alligators",
    title: "Alligators",
    author: "Mickey Mouse",
    username: "test",
    date: "01-23-2021",
    content: "I like alligators",
    tags: ["alligators", "reptiles", "teeth"],
  },
};

const useJournalData = (user) => {
  const [journals, setJournals] = useState(seedJournals);
  const [drafts, setDrafts] = useState(seedJournals);
  const [currentJournal, setCurrentJournal] = useState();

  // @TODO filter journals by user
  // useEffect(() => {
  //   // setJournals();
  //   const userJournals = Object.entries(journals).filter((d) => {
  //     if (d) {
  //       return d[1].username === user.username;
  //     }
  //   });
  //   console.log(userJournals);
  // }, [user]);

  // save draft / edit journal /publish
  const saveDraft = (
    journalId,
    title,
    author,
    tags,
    content,
    publish = false
  ) => {
    const id = journalId ? journalId : uuidv4();
    const path = makePath(title);
    // @TODO parse date to a string
    const date = "new Date()";
    const editedJournal = {
      path,
      title,
      author,
      date,
      content,
      tags,
    };

    setCurrentJournal([id, editedJournal]);

    setDrafts((prev) => ({ ...prev, [id]: editedJournal }));

    if (publish) {
      setJournals((prev) => ({ ...prev, [id]: editedJournal }));
    }
  };

  return { journals, saveDraft, drafts, currentJournal, setCurrentJournal };
};

export default useJournalData;
