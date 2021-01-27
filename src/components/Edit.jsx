import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import MarkedInput from "./MarkedInput";
import Preview from "./Preview";
import Tags from "./Tags";

const CreateMain = styled.main`
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  border: 2px solid black;
`;

const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 2px solid #b42828;
`;

const Edit = ({ saveDraft, journals, setCurrentJournal }) => {
  const { journalId } = useParams();

  const journalArray = Object.entries(journals);
  const [id, chosenJournal] = journalArray.find((d) => d[1].path === journalId);

  const [markdownText, setMarkdownText] = useState(chosenJournal.content);
  const [title, setTitle] = useState(chosenJournal.title);
  const [tags, setTags] = useState(chosenJournal.tags);

  const author = "Montauk Grabsky";

  const publish = () => {
    saveDraft(id, title, author, tags, markdownText, true);
    setCurrentJournal(null);
  };

  const save = () => {
    saveDraft(id, title, author, tags, markdownText);
  };

  return (
    <CreateMain>
      <h1>edit your journal entry</h1>
      <EditorContainer>
        <MarkedInput
          setMarkdownText={setMarkdownText}
          setTitle={setTitle}
          title={title}
          markdownText={markdownText}
        />
        <Preview markdownText={markdownText} />
      </EditorContainer>
      <Tags tags={tags} setTags={setTags} />
      <Link to="/journals" onClick={publish}>
        publish
      </Link>
      <button onClick={save}>save draft</button>
    </CreateMain>
  );
};

export default Edit;
