// Checkboxes are '/n' deliminated strings
// This logic will also work on radio buttons (which function like checkboxes with only 1 option)
const getMultipleChoiceValues = (value) => {
  return !!value ? value.split('/n') : [];
};

export default getMultipleChoiceValues;
