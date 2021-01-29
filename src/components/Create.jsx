import React, { useState } from "react";
import Tags from "./Tags";

import {
  CreateMain,
  EditorContainer,
  ContainerDiv,
  BtnBox,
  Btn,
  BtnLink,
  StyledPreview,
  StyledMarkedInput,
} from "./createComponents/CreateComponents";

const Create = ({ saveDraft, currentJournal, setCurrentJournal }) => {
  let id;
  if (currentJournal) {
    id = currentJournal[0];
  }
  const [markdownText, setMarkdownText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);

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
      <EditorContainer>
        <StyledMarkedInput
          style={{ gridArea: "editor" }}
          setMarkdownText={setMarkdownText}
          setTitle={setTitle}
          title={title}
          markdownText={markdownText}
        />
        <StyledPreview title={title} markdownText={markdownText} />
      </EditorContainer>
      <ContainerDiv>
        <Tags tags={tags} setTags={setTags} />
        <BtnBox>
          <Btn>
            <BtnLink to="/journals" onClick={publish}>
              publish
            </BtnLink>
          </Btn>
          <Btn onClick={save}>save draft</Btn>
        </BtnBox>
      </ContainerDiv>
    </CreateMain>
  );
};

export default Create;
