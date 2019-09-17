import { getFieldInitialValue } from 'src/fields/fieldMap';

import {
  SET_INITIAL_FIELD_VALUES,
  UPDATE_FIELD_VALUE,
  SET_LANG,
} from 'src/redux/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FIELD_VALUE:
      return { ...state, fieldValues: { ...state.fieldValues, [action.id]: action.value }};
    case SET_INITIAL_FIELD_VALUES:
      // Extract all fields from all sections of all pages
      // And set the correct initial value for their type
      return { ...state, fieldValues: (
        action.pages.reduce((acc, page) => ({
          ...acc,
          ...page.sections.reduce((acc, section) => ({
            ...acc,
            ...section.fields.reduce((acc, field)=>({
              ...acc,
              [field.id]: getFieldInitialValue(field),
            }),{}),
          }),{}),
        }),{})
      )};
    case SET_LANG:
      return { ...state, lang: action.lang };
    default:
      return state;
   }
};

export default reducer;
