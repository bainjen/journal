import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Tags from "./Tags";
import {
  CreateMain,
  EditorContainer,
  ContainerDiv,
  BtnBox,
  BtnLink,
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
          <BtnLink to="/journals" onClick={publish}>
            publish
          </BtnLink>

          <BtnLink onClick={save}>save draft</BtnLink>
        </BtnBox>
      </ContainerDiv>
    </CreateMain>
  );
};

export default Edit;
