import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PreviewContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
`;

const PreviewArea = styled.div`
  padding: 2em 0.75em 0em 0.75em;
  color: ${({ theme }) => theme.textColor};
  hyphens: auto;
  overflow: scroll;
  max-height: 90vh;
`;

const StyledTitleMarkdown = styled(ReactMarkdown)`
  font-size: 40px;
  font-family: ${({ theme }) => theme.prevTitleFont};
  color: ${({ theme }) => theme.prevTitleColor};
  margin-bottom: 5vh;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  & p {
    color: ${({ theme }) => theme.prevTextColor};
    font-family: ${({ theme }) => theme.prevTextFont};
    font-size: 16px;
    margin-bottom: 0.5em;
  }

  & h1 {
    font-family: ${({ theme }) => theme.prevTitleFont};
    color: ${({ theme }) => theme.prevHeadingColor};
    font-size: 32px;
    margin-bottom: 0.5em;
  }
  & h2,
  h3 {
    color: ${({ theme }) => theme.prevHeadingColor};
    font-family: ${({ theme }) => theme.prevTitleFont};
    font-size: 24px;
    margin-bottom: 0.5em;
  }

  & h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.prevHeadingColor};
    font-family: ${({ theme }) => theme.prevTitleFont};
    font-size: 16px;
    margin-bottom: 0.5em;
  }
`;
const Preview = ({ markdownText, title }) => {
  return (
    <PreviewContainer>
      <PreviewArea>
        <StyledTitleMarkdown source={title} />
        <StyledReactMarkdown source={markdownText} />
      </PreviewArea>
    </PreviewContainer>
  );
};

export default Preview;
