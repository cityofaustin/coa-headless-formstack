import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/components/FormPage/FormPage';
import FormHomePage from 'src/components/sections/FormHomePage';
import FormHeader from 'src/components/sections/FormHeader';
import { SET_INITIAL_FIELD_VALUES } from 'src/redux/actions';

const FormContainer = ({ pageContext: { name, formHomePath, pages }}) => {
  const dispatch = useDispatch();

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
