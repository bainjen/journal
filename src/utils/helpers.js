// make path based on journal title
export const makePath = (title) => {
  const lcTitle = title.toLowerCase().replace(/\s+/g, "-");
  return lcTitle;
};
