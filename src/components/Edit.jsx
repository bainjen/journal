import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useJournalValidation from "../hooks/useJournalValidation";
import Tags from "./Tags";
import {
  CreateMain,
  EditorContainer,
  ContainerDiv,
  BtnBox,
  BtnLink,
  BtnA,
  StyledPreview,
  StyledMarkedInput,
} from "./createComponents/CreateComponents";

const Edit = ({ saveDraft, journals, setCurrentJournal }) => {
  const { journalId } = useParams();

  const journalArray = Object.entries(journals);
  const [id, chosenJournal] = journalArray.find((d) => d[1].path === journalId);

  const [markdownText, setMarkdownText] = useState(chosenJournal.content);
  const [title, setTitle] = useState(chosenJournal.title);
  const [tags, setTags] = useState(chosenJournal.tags);

  const { canSubmit } = useJournalValidation(title, markdownText);

  const submitClass = canSubmit ? "canSubmit" : "disabled";

  const publish = () => {
    saveDraft(id, title, tags, markdownText, true);
    setCurrentJournal(null);
  };

  const save = () => {
    saveDraft(id, title, tags, markdownText);
  };

  return (
    <CreateMain>
      <EditorContainer>
        <StyledMarkedInput
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
          <BtnA onClick={save}>save draft</BtnA>
        </BtnBox>
      </ContainerDiv>
    </CreateMain>
  );
};

export default Edit;
