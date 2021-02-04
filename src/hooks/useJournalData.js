import { useState, useEffect } from "react";
import { pick } from "lodash";
import { v4 as uuidv4 } from "uuid";

const seedJournals = {
  test1: {
    path: "test1",
    title: "Bananagrams for President",
    author: "Tulip Montgomery",
    username: "test",
    date: "Dec 12, 2020",
    content:
      "As we await the final days of the US presidential term, it occurred to me that we'd all have just been better off had we elected Bananagrams for president. Yes, that's right. Bananagrams, the word game. It would have been more fun, and had a broader vocabulary, at the very least.",
    tags: ["hello", "blog", "bananagrams", "president", "fruit"],
  },

  test2: {
    path: "test2",
    title: "Alligators",
    author: "Tulip Montgomery",
    username: "test",
    date: "Dec 18, 2020",
    content:
      "I like alligators but only from a distance. You should never let an alligator get too close. Sometimes they bite.",
    tags: ["alligators", "reptiles", "teeth"],
  },

  test3: {
    path: "test3",
    title: "Skittles Taste Like a Rainbow",
    author: "Tulip Montgomery",
    username: "test",
    date: "Dec 20, 2020",
    content:
      "Salad for breakfast and pancakes for dinner. What is my life coming to? Somebody asked me if I'd ever tasted a rainbow and of course, I said 'no'. How is that even possible!? But after deep contemplation, I felt an immense rush of guilt. I had lied! I've tasted Skittles. They are the rainbow.",
    tags: ["salad", "pancakes", "skittles", "food", "candy"],
  },
  test4: {
    path: "test4",
    title: "Books 4 Sale",
    author: "Tulip Montgomery",
    username: "test",
    date: "Jan 3, 2021",
    content:
      "They were being sold for 10 cents a piece at the garage sale in my grandparents' small town and I was so bored and eager that I just couldn't help myself. Now I am the proud owner of a set of encyclopedias from 1977. What a steal!",
    tags: ["books", "garage", "sale"],
  },

  test5: {
    path: "test5",
    title: "Deep Thoughts",
    author: "Tulip Montgomery",
    username: "test",
    date: "Jan 23, 2021",
    content:
      "Last night I dreamt that my great aunt was a dentist and she wanted to pull out my teeth in the kitchen before we went to the grocery store to buy things for dinner. I was hesitant but allowed for it happen. When I awakened, I was relieved to feel the backs of my still-present teeth on the tip of my tongue.",
    tags: ["dreams", "thoughts", "whimsy", "nibblets", "nubbins"],
  },
};

const useJournalData = (user, isLoggedIn) => {
  const [db, setDb] = useState(seedJournals);
  const [journals, setJournals] = useState(seedJournals);
  const [drafts, setDrafts] = useState(seedJournals);
  const [currentJournal, setCurrentJournal] = useState();

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
    const path = id;
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
