import {
  SET_INITIAL_FIELD_VALUES,
  UPDATE_FIELD_VALUE,
  SET_LANG,
} from 'src/redux/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_INITIAL_FIELD_VALUES:
      // Extract all fields from all sections of all pages
      return { ...state, fields: (
        action.pages.reduce((acc,page) => (
          acc.concat(
            page.sections.reduce((acc, section) => (
              acc.concat(section.fields)
            ),[])
          )
        ),[])
      ) };
    case UPDATE_FIELD_VALUE:
      return { ...state, fields: { ...state.fields, [action.id]: action.value }};
    case SET_LANG:
      return { ...state, lang: action.lang };
    default:
      return state;
   }
};

export default reducer;
