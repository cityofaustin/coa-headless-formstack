import React from 'react';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';

import Button from 'src/components/sections/Button';
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
      <Button onClick={() => setLang("en")}>English</Button>
      <Button onClick={() => setLang("es")}>Spanish</Button>
      <Link to={landingPagePath}>Home</Link><br/>
    </div>
  );
};

export default FormHeader;
