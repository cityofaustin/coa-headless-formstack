import React from 'react';
import { Link } from '@reach/router';

const FormLandingPage = ({name, pages, lang}) => {
  return (
    <div>
      <h1>{`Welcome to ${name}`}</h1>
      <span>This page is in {lang}</span>
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

export default FormLandingPage;
