import { useState, useEffect } from "react";

const useJournalValidation = (title, markdownText) => {
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (title !== "" && markdownText !== "") {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [title, markdownText]);

  return { canSubmit };
};

export default useJournalValidation;
