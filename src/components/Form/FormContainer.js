import React from 'react';
import { Router, Link } from '@reach/router'

import FormPage from './FormPage';
import { getPages } from '../../helpers/data';

const FormContainer = (props) => {
  const { data } = props.pageContext;
  const { fields, coaConfig } = data;
  const pages = getPages(fields, coaConfig.pathPrefix);

  console.log("~~~ my pages", pages)
  return (
    <div>
      <h1>{`Welcome to ${coaConfig.name}`}</h1>
      <ul>
        {pages.map((page, i)=>(
          <li key={i}>
            <Link
              to={page.path}
            >
              {page.heading}
            </Link>
          </li>
        ))}
      </ul>
      <Router>
        {pages.map((page, i)=>(
          <FormPage
            key={i}
            path={page.path}
            fields={page.fields}
          />
        ))}
      </Router>
    </div>
  );
};

export default FormContainer;
