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
`;

const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.createBorder};
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  width: 100%;
  align-items: flex-start;
`;

const BtnBox = styled.div`
  display: flex;
`;
const Btn = styled.button`
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnBackground};
  border: 2px solid;
  border-color: ${({ theme }) => theme.btnColor};
  height: 30px;
  width: 85px;
  margin: 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
  &:active {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  :visited {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  :hover {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
`;

const BtnLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.btnColor};
  &:active {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  :visited {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  :hover {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
`;

const Edit = ({ saveDraft, journals, setCurrentJournal }) => {
  const { journalId } = useParams();
  // const [preview, setPreview] = useState(false);

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
        <MarkedInput
          setMarkdownText={setMarkdownText}
          setTitle={setTitle}
          title={title}
          markdownText={markdownText}
        />
        <Preview title={title} markdownText={markdownText} />
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
          {/* <button onClick={() => setPreview((prev) => !prev)}>Preview</button> */}
        </BtnBox>
      </ContainerDiv>
    </CreateMain>
  );
};

export default Edit;
