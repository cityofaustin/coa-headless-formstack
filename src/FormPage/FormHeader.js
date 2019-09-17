import React from 'react';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';

import Button from 'src/common/Button';
import { SET_LANG } from 'src/redux/actions';

const FormHeader = ({ formHomePath }) => {
  const dispatch = useDispatch();
  const setLang = (lang) => {
    return dispatch({
      type: SET_LANG,
      lang
    });
  }

  return (
    <div>
      <Button onClick={() => setLang("en")}>English</Button>
      <Button onClick={() => setLang("es")}>Spanish</Button>
      <Link to={formHomePath}>Home</Link><br/>
    </div>
  );
};

export default FormHeader;
