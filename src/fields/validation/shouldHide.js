import getMultipleChoiceValues from 'src/helpers/getMultipleChoiceValues';

// We use getMultipleChoiceValues because checks are only run on Radio or Checkbox fields
const runCheck = (check, fieldValues) => {
  const values = getMultipleChoiceValues(fieldValues[check.field]);
  if (check.condition === "equals") {
    return values.includes(check.option);
  } else if (check.condition === "notequals") {
    return !values.includes(check.option);
  } else {
    throw new Error(`Formstack check.condition "${check.condition}" is not valid.`);
  }
};

const runConditional = ({conditional, checks}, fieldValues) => {
  if (conditional === "any") {
    return checks.some((check)=>runCheck(check, fieldValues));
  } else if (conditional === "all") {
    return checks.every((check)=>runCheck(check, fieldValues));
  } else {
    throw new Error(`Formstack logic.conditional "${conditional}" is not valid.`);
  }
};

const shouldHide = ({ logic }, fieldValues) => {
  if (!logic) return false;
  if (logic.action === "hide") {
    return runConditional(logic, fieldValues);
  } else if (logic.action === "show") {
    return !runConditional(logic, fieldValues);
  } else {
    throw new Error(`Formstack logic.action "${logic.action}" is not valid.`);
  }
};

export default shouldHide;
