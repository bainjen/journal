import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MarkedInput from "./MarkedInput";
import Preview from "./Preview";
import Tags from "./Tags";

const CreateMain = styled.main`
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
`;

const ContainerDiv = styled.div`
  display: flex;
  margin: 0.5em;
`;

const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  margin-top: 2em;
  margin-bottom: 5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.createBorder};
`;

const Btn = styled.button`
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnBackground};
  border: 2px solid;
  border-color: ${({ theme }) => theme.btnColor};
  height: 30px;
  width: 70px;
  margin: 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
  /* &:visited { */
`;

const BtnLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.btnColor};
`;

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
      {/* <h1>write your draft here</h1> */}
      {/* <ContainerDiv> */}
      <EditorContainer>
        <MarkedInput
          setMarkdownText={setMarkdownText}
          setTitle={setTitle}
          title={title}
          markdownText={markdownText}
        />
        <Preview markdownText={markdownText} />
      </EditorContainer>
      <ContainerDiv>
        <Tags tags={tags} setTags={setTags} />
        <Btn>
          <BtnLink to="/journals" onClick={publish}>
            publish
          </BtnLink>
        </Btn>
        <Btn onClick={save}>save draft</Btn>
      </ContainerDiv>
      {/* </ContainerDiv> */}
    </CreateMain>
  );
};

export default Create;
