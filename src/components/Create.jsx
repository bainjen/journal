import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import MarkedInput from "./MarkedInput";
const CreateMain = styled.main`
  width: 100%;
  border: 2px solid black;
`;

const EditorContainer = styled.div`
  width: 100%;
  border: 2px solid #b42828;
`;

const Create = () => {
  const [markdownText, setMarkdownText] = useState("");

  return (
    <CreateMain>
      <h1>TITLE</h1>
      <EditorContainer>
        <MarkedInput setMarkdownText={setMarkdownText} />
        <ReactMarkdown source={markdownText} />
      </EditorContainer>
    </CreateMain>
  );
};

export default Create;
