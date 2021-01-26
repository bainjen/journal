import { useState } from "react";
import { makePath } from "../utils/helpers";

const seedJournals = [
  {
    path: "test1",
    title: "Bananagrams",
    author: "Mickey Mouse",
    date: "01-20-2021",
    content: "This is my blog post",
    tags: ["hello", "blog", "trees"],
    draft: "This is my blog post",
  },

  {
    path: "test2",
    title: "Alligators",
    author: "Mickey Mouse",
    date: "01-23-2021",
    content: "I like alligators",
    tags: ["alligators", "reptiles", "teeth"],
    draft: "I like alligators",
  },
];

const useJournalData = () => {
  const [journals, setJournals] = useState(seedJournals);
  // save draft / edit journal
  // publish journal
  const publishJournal = (title, author, tags, draft) => {
    const path = makePath(title);
    const date = "new Date()";
    const content = draft;
    const newJournal = {
      path,
      title,
      author,
      date,
      content,
      tags,
      draft,
    };
    setJournals((prev) => {
      return [...prev, newJournal];
    });
  };
  // delete journal

  return { journals, publishJournal };
};

export default useJournalData;
