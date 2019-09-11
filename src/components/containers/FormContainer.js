import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/components/containers/FormPage';
import FormLandingPage from 'src/components/sections/FormLandingPage';
import FormHeader from 'src/components/sections/FormHeader';
import { getPages } from 'src/helpers/data';
import { SET_INITIAL_FIELDS } from 'src/redux/actions';

const FormContainer = (props) => {
  const dispatch = useDispatch();
  const { data } = props.pageContext;
  const { fields, coaConfig: {name, pathPrefix} } = data;
  const pages = getPages(fields, pathPrefix);

  // Populate our redux store with initial values for each form field
  useEffect(()=>{
    const initialFieldValues = fields.reduce((initialFieldValues, field)=>{
      if (field.type !== "section") {
        initialFieldValues[field.id]=null;
      }
      return initialFieldValues;
    },{});
    dispatch({
      type: SET_INITIAL_FIELDS,
      fields: initialFieldValues,
    });
  },[dispatch, fields]);

  return (
    <div>
      <FormHeader
        landingPagePath={pathPrefix}
      />
      <Router>
        <FormLandingPage
          path={pathPrefix}
          name={name}
          pages={pages}
        />
        {pages.map((page, i)=>(
          <FormPage
            key={i}
            pageNumber={i}
            path={page.path}
            fields={page.fields}
            pages={pages}
            landingPagePath={pathPrefix}
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
