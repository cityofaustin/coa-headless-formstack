import React from 'react';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';

import { SET_LANG } from 'src/redux/actions';

const FormHeader = ({ landingPagePath }) => {
  const dispatch = useDispatch();
  const setLang = (lang) => {
    return dispatch({
      type: SET_LANG,
      lang
    });
  }

  return (
    <div>
      <span onClick={() => setLang("en")}>English</span><br/>
      <span onClick={() => setLang("es")}>Spanish</span><br/>
      <Link to={landingPagePath}>Home</Link><br/>
    </div>
  );
};

export default FormHeader;
