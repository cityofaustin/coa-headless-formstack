import {
  SET_INITIAL_FIELDS,
  UPDATE_FIELD_VALUE,
  SET_LANG,
} from 'src/redux/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_INITIAL_FIELDS:
      return { ...state, fields: action.fields };
    case UPDATE_FIELD_VALUE:
      return { ...state, fields: { ...state.fields, [action.id]: action.value }};
    case SET_LANG:
      return { ...state, lang: action.lang };
    default:
      return state;
   }
};

export default reducer;
