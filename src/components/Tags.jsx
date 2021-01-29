import React, { useState } from "react";
import styled from "styled-components";

const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 5px 0;
`;

const TagSpan = styled.span`
  display: inline-block;
  margin-left: 3px;
  margin-top: 3px;
  padding: 3px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.textFont};
  font-size: 16px;
  text-transform: lowercase;
  color: ${({ theme }) => theme.textColor};
`;

const TagBtn = styled.button`
  outline: none;
  border: none;
  margin-left: 3px;
  padding: 2px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.btnBackground};
  color: ${({ theme }) => theme.textColor};
`;

const InputTag = styled.input`
  font-family: ${({ theme }) => theme.textFont};
  font-size: 16px;
  padding: 5px;
  margin-left: 3px;
  margin-top: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  width: 100px;
`;

const PlusDiv = styled.div`
  display: flex;
`;

const AddButton = styled.button`
  display: inline-block;
  margin-left: 3px;
  margin-top: 3px;
  padding: 3px;
  border: none;
  font-family: ${({ theme }) => theme.textFont};
  font-size: 16px;
  text-transform: lowercase;
  color: ${({ theme }) => theme.textColor};
  background: transparent;
`;

const Tags = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState("");

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags((prev) => [...prev, val]);
      setTagInput("");
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  const handleClick = (e) => {
    if (tagInput) {
      setTags((prev) => [...prev, tagInput]);
      setTagInput("");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTagInput(value);
  };
  const currentTags = tags.map((tag, i) => {
    return (
      <TagSpan key={tag}>
        {tag}
        <TagBtn onClick={() => removeTag(i)}>x</TagBtn>
      </TagSpan>
    );
  });
  return (
    <TagDiv>
      <div>{currentTags}</div>
      <PlusDiv>
        <InputTag
          type="text"
          placeholder="tags"
          onKeyDown={inputKeyDown}
          value={tagInput}
          onChange={handleChange}
        />
        <AddButton onClick={(e) => handleClick(e)}>+</AddButton>
      </PlusDiv>
    </TagDiv>
  );
};

export default Tags;
