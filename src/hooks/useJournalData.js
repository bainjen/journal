import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { makePath } from "../utils/helpers";

const seedJournals = {
  test1: {
    path: "bananagrams for president",
    title: "Bananagrams for president",
    author: "Mickey Mouse",
    username: "test",
    date: "Dec 12, 2020",
    content: "This is my blog post",
    tags: ["hello", "blog", "trees"],
  },

  test2: {
    path: "alligators",
    title: "Alligators",
    author: "Mickey Mouse",
    username: "test",
    date: "Jan 3, 2021",
    content: "I like alligators",
    tags: ["alligators", "reptiles", "teeth"],
  },

  test3: {
    path: "skiddles are neat i think",
    title: "skiddles are neat i think",
    author: "Top Secret",
    username: "test",
    date: "Jan 23, 2021",
    content: "salad for breakfast and pancakes for dinner",
    tags: ["salad", "pancakes", "skiddles", "food", "candy"],
  },
  test4: {
    path: "this is 4",
    title: "this is 4",
    author: "Mickey Mouse",
    username: "test",
    date: "Jan 3, 2021",
    content: "I like alligators",
    tags: ["alligators", "reptiles", "teeth"],
  },

  test5: {
    path: "this is the fifth one right here now long title woah",
    title: "this is the fifth one right here now long title woah",
    author: "Top Secret",
    username: "test",
    date: "Jan 23, 2021",
    content: "salad for breakfast and pancakes for dinner",
    tags: ["salad", "pancakes", "skiddles", "food", "candy"],
  },
};

const useJournalData = (user) => {
  const [journals, setJournals] = useState(seedJournals);
  const [drafts, setDrafts] = useState(seedJournals);
  const [currentJournal, setCurrentJournal] = useState();

  // @TODO add delete functionality
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
    const newDate = new Date().toDateString();
    const dateArr = newDate.split(" ");
    const date = `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;

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
