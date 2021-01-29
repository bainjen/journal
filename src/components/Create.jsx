import React, { useState, useEffect } from "react";
import Tags from "./Tags";
import useJournalValidation from "../hooks/useJournalValidation";

import {
  CreateMain,
  EditorContainer,
  ContainerDiv,
  BtnBox,
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

  const { canSubmit } = useJournalValidation(title, markdownText);

  const submitClass = canSubmit ? "canSubmit" : "disabled";

  const publish = () => {
    saveDraft(id, title, tags, markdownText, true);
    setCurrentJournal(null);
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
          <BtnLink to="/journals" onClick={publish} className={submitClass}>
            publish
          </BtnLink>
        </BtnBox>
      </ContainerDiv>
    </CreateMain>
  );
};

export default Create;
