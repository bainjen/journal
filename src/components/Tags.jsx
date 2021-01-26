import React, { useState } from "react";
import styled from "styled-components";

const TagDiv = styled.div``;

const Tags = ({ tags, setTags }) => {
  // const [tags, setTags] = useState([]);
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

  const handleChange = (e) => {
    const { value } = e.target;
    setTagInput(value);
  };
  const currentTags = tags.map((tag, i) => {
    return (
      <li key={tag}>
        {tag}
        <button onClick={() => removeTag(i)}>x</button>
      </li>
    );
  });
  return (
    <TagDiv>
      <ul>
        {currentTags}
        <li>
          <input
            type="text"
            onKeyDown={inputKeyDown}
            value={tagInput}
            onChange={handleChange}
          />
        </li>
      </ul>
    </TagDiv>
  );
};

export default Tags;
