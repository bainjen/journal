import { useState, useEffect } from "react";
import { pick } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { makePath } from "../utils/helpers";

const seedJournals = {
  test1: {
    path: "bananagrams-for-president",
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
    content:
      "I like alligators Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins wit I like alligators Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    tags: ["alligators", "reptiles", "teeth"],
  },

  test3: {
    path: "skiddles-are-neat-i-think",
    title: "skiddles are neat i think",
    author: "Top Secret",
    username: "test",
    date: "Jan 23, 2021",
    content: "salad for breakfast and pancakes for dinner",
    tags: ["salad", "pancakes", "skiddles", "food", "candy"],
  },
  test4: {
    path: "this-is-4",
    title: "this is 4",
    author: "Mickey Mouse",
    username: "test",
    date: "Jan 3, 2021",
    content: "I like alligators",
    tags: ["alligators", "reptiles", "teeth"],
  },

  test5: {
    path: "this-is-the-fifth-one-right-here-now-long-title-woah",
    title: "this is the fifth one right here now long title woah",
    author: "Top Secret",
    username: "notTest",
    date: "Jan 23, 2021",
    content: "salad for breakfast and pancakes for dinner",
    tags: ["salad", "pancakes", "skiddles", "food", "candy"],
  },
};

const useJournalData = (user, isLoggedIn) => {
  const [db, setDb] = useState(seedJournals);
  const [journals, setJournals] = useState(seedJournals);
  const [drafts, setDrafts] = useState(seedJournals);
  const [currentJournal, setCurrentJournal] = useState();

  // @TODO add delete functionality
  // @TODO filter journals by user

  useEffect(() => {
    if (isLoggedIn) {
      const userPostIds = Object.entries(db)
        .filter((p) => p[1].username === user.username)
        .map((d) => d[0]);
      const userPosts = pick(db, userPostIds);
      setJournals(userPosts);
    }
  }, [user, isLoggedIn, db]);

  const saveDraft = (journalId, title, tags, content, publish = false) => {
    const id = journalId ? journalId : uuidv4();
    const path = makePath(title);
    const newDate = new Date().toDateString();
    const dateArr = newDate.split(" ");
    const date = `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
    const username = user.username;
    const author = user.name;
    const editedJournal = {
      path,
      title,
      author,
      date,
      content,
      tags,
      username,
    };

    setCurrentJournal([id, editedJournal]);

    setDrafts((prev) => ({ ...prev, [id]: editedJournal }));

    if (publish) {
      setJournals((prev) => ({ ...prev, [id]: editedJournal }));
      setDb((prev) => ({ ...prev, [id]: editedJournal }));
    }
  };

  return { journals, saveDraft, drafts, currentJournal, setCurrentJournal };
};

export default useJournalData;
