import React from 'react';
import { Router, Redirect, Link } from '@reach/router';

import FormPage from 'src/components/Form/FormPage';
import { getPages } from 'src/helpers/data';

const FormMainPage = ({name, pages}) => {
  return (
    <div>
      <h1>{`Welcome to ${name}`}</h1>
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
    </div>
  )
};

const FormContainer = (props) => {
  const { data } = props.pageContext;
  const { fields, coaConfig: {name, pathPrefix} } = data;
  const pages = getPages(fields, pathPrefix);

  return (
    <div>
      <Router>
        <FormMainPage
          path={pathPrefix}
          name={name}
          pages={pages}
        />
        {pages.map((page, i)=>(
          <FormPage
            key={i}
            path={page.path}
            fields={page.fields}
          />
        ))}
        <Redirect
          from={`${pathPrefix}/*`}
          to={pathPrefix}
          noThrow
        />
      </Router>
    </div>
  );
};

export default FormContainer;
