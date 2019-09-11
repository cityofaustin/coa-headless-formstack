import React from 'react';
import { Link } from '@reach/router';

const FormHeader = ({ setLang, landingPagePath }) => {
  return (
    <div>
      <span onClick={() => setLang("en")}>English</span><br/>
      <span onClick={() => setLang("es")}>Spanish</span><br/>
      <Link to={landingPagePath}>Home</Link><br/>
    </div>
  );
};

export default FormHeader;
