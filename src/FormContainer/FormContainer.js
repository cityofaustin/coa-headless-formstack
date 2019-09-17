import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/FormPage/FormPage';
import FormHomePage from 'src/FormPage/FormHomePage';
import FormHeader from 'src/FormPage/FormHeader';
import { SET_INITIAL_FIELD_VALUES } from 'src/redux/actions';

const FormContainer = ({ pageContext: { name, formHomePath, pages }}) => {
  const dispatch = useDispatch();

  // Initialize state.fieldValues on page start up.
  useEffect(()=>{
    dispatch({
      type: SET_INITIAL_FIELD_VALUES,
      pages: pages,
    });
  },[dispatch, pages]);

  return (
    <div>
      <FormHeader
        formHomePath={formHomePath}
      />
      <Router>
        <FormHomePage
          path={formHomePath}
          name={name}
          pages={pages}
        />
        {pages && pages.map(({path, sectionField, sections}, i)=>(
          <FormPage
            key={i}
            pageIndex={i}
            path={path}
            sectionField={sectionField}
            sections={sections}
            pages={pages}
            formHomePath={formHomePath}
          />
        ))}
        <Redirect
          from={`${formHomePath}/*`}
          to={formHomePath}
          noThrow
        />
      </Router>
    </div>
  );
};

export default FormContainer;
