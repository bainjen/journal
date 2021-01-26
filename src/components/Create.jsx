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

const Create = ({ publishJournal }) => {
  const [markdownText, setMarkdownText] = useState("");

  const title = "Hello Ducky";
  const author = "Montauk Grabsky";
  const tags = ["unicorns", "tattoos", "goats"];

  const publish = () => {
    publishJournal(title, author, tags, markdownText);
  };

  return (
    <CreateMain>
      <h1>TITLE</h1>
      <EditorContainer>
        <MarkedInput setMarkdownText={setMarkdownText} />
        <Preview markdownText={markdownText} />
      </EditorContainer>
      <button onClick={publish}>publish</button>
    </CreateMain>
  );
};

export default Create;
