import React from "react";
import styled from "styled-components";

const ErrorDiv = styled.div`
  color: #c54848;
  font-family: ${({ theme }) => theme.textFont};
  visibility: ${({ vis }) => vis};
  transition: visibility 1s;
`;
const ErrorMessage = ({ isShown, children, ...rest }) => {
  const vis = isShown ? "visible" : "hidden";
  return (
    <ErrorDiv vis={vis} {...rest}>
      {children}
    </ErrorDiv>
  );
};

export default ErrorMessage;
