import React from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';

const FormLandingPage = ({name, pages}) => {
  const lang = useSelector(state => state.lang);

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
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default FormLandingPage;
