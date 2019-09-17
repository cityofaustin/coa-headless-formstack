import React from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';

const FormHomePage = ({name, pages}) => {
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
              {page.sectionField.section_heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default FormHomePage;
