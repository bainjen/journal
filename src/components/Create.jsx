import React, { useState } from "react";
import styled from "styled-components";

import MarkedInput from "./MarkedInput";
import Preview from "./Preview";

const CreateMain = styled.main`
  width: 100%;
  border: 2px solid black;
`;

const EditorContainer = styled.div`
  display: flex;
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
        <Preview markdownText={markdownText} />
      </EditorContainer>
    </CreateMain>
  );
};

export default Create;
