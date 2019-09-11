import React from 'react';
import { useSelector } from 'react-redux';

import FieldContainer from 'src/components/containers/FieldContainer';

const FormPage = ({ fields }) => {
  const lang = useSelector(state => state.lang);

  return (
    <div>
      <h1>Hi here is a formy page.</h1>
      <span>This page is in {lang}</span>
      <h2>It has these fields:</h2>
      <ul>
        {fields.map((field, i)=>(
          <li key={i}>
            <FieldContainer field={field} lang={lang}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormPage;
