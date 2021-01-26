import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PreviewContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const PreviewArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;
const Preview = ({ markdownText }) => {
  return (
    <PreviewContainer>
      <Title>converted title</Title>
      <PreviewArea>
        <ReactMarkdown source={markdownText} />
      </PreviewArea>
    </PreviewContainer>
  );
};

export default Preview;
