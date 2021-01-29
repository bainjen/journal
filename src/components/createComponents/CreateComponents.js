import { Link } from "react-router-dom";
import styled from "styled-components";

import Preview from "../Preview";
import MarkedInput from "../MarkedInput";
import { device } from "../../devices";

export const CreateMain = styled.main`
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
`;

export const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-area: "editor";
  width: 100%;
  margin-top: 2em;
  margin-bottom: 5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.createBorder};
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "editor preview";
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  width: 100%;
  align-items: flex-start;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const BtnLink = styled(Link)`
  font-family: ${({ theme }) => theme.textFont};
  color: ${({ theme }) => theme.btnColor};
  appearance: button;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnBackground};
  border: 2px solid;
  border-color: ${({ theme }) => theme.btnColor};
  height: 30px;
  width: 90px;
  margin: 1em;
  line-height: 25px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  &:active {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  &:visited {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  &:hover {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  &.disabled {
    pointer-events: none;
  }
`;

export const StyledPreview = styled(Preview)`
  display: none;
  @media ${device.tablet} {
    grid-area: preview;
    display: block;
  }
`;

export const StyledMarkedInput = styled(MarkedInput)`
  grid-area: editor;
`;

export const BtnA = styled.a`
  font-family: ${({ theme }) => theme.textFont};
  color: ${({ theme }) => theme.btnColor};
  appearance: button;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnBackground};
  border: 2px solid;
  border-color: ${({ theme }) => theme.btnColor};
  height: 30px;
  width: 90px;
  margin: 1em;
  line-height: 25px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  &:active {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  &:visited {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
  &:hover {
    outline-color: ${({ theme }) => theme.hoverColor};
  }
`;
