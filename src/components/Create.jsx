import React, { useState } from "react";
import styled from "styled-components";

import MarkedInput from "./MarkedInput";
import Preview from "./Preview";

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

const Create = ({ saveDraft }) => {
  const [markdownText, setMarkdownText] = useState("");
  const [title, setTitle] = useState("");

  // const title = "Hello Ducky";
  const author = "Montauk Grabsky";
  const tags = ["unicorns", "tattoos", "goats"];

  const publish = () => {
    saveDraft(title, author, tags, markdownText, true);
  };

  const save = () => {
    saveDraft(title, author, tags, markdownText);
  };

  return (
    <CreateMain>
      <h1>TITLE</h1>
      <EditorContainer>
        <MarkedInput setMarkdownText={setMarkdownText} setTitle={setTitle} />
        <Preview markdownText={markdownText} />
      </EditorContainer>
      <button onClick={publish}>publish</button>
      <button onClick={save}>save draft</button>
    </CreateMain>
  );
};

export default Create;
