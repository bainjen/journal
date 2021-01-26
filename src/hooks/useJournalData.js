import { useState } from "react";
import { makePath } from "../utils/helpers";

const seedJournals = {
  test1: {
    path: "test1",
    title: "Bananagrams",
    author: "Mickey Mouse",
    date: "01-20-2021",
    content: "This is my blog post",
    tags: ["hello", "blog", "trees"],
  },

  test2: {
    path: "test2",
    title: "Alligators",
    author: "Mickey Mouse",
    date: "01-23-2021",
    content: "I like alligators",
    tags: ["alligators", "reptiles", "teeth"],
  },
};

const useJournalData = () => {
  const [journals, setJournals] = useState(seedJournals);
  const [drafts, setDrafts] = useState({});

  // save draft / edit journal /publish
  const saveDraft = (title, author, tags, content, publish = false) => {
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
    setDrafts((prev) => ({ ...prev, [path]: editedJournal }));

    if (publish) {
      setJournals((prev) => ({ ...prev, [path]: editedJournal }));
    }
  };

  return { journals, saveDraft, drafts };
};

export default useJournalData;
