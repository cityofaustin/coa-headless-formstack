import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/components/FormPage/FormPage';
import FormLandingPage from 'src/components/sections/FormLandingPage';
import FormHeader from 'src/components/sections/FormHeader';
import { formatFieldsAndPages } from 'src/helpers/data';
import { setFieldInitialValue } from 'src/helpers/fieldMap';
import { SET_INITIAL_FIELDS } from 'src/redux/actions';

const FormContainer = (props) => {
  const dispatch = useDispatch();
  const { data } = props.pageContext;
  const { fields: preprocessedFields, coaConfig: {name, pathPrefix} } = data;
  const {fields, pages} = formatFieldsAndPages(preprocessedFields, pathPrefix);

  // Populate our redux store with initial values for each form field
  useEffect(()=>{
    const fieldInitialValues = fields.reduce(setFieldInitialValue,{});
    dispatch({
      type: SET_INITIAL_FIELDS,
      fields: fieldInitialValues,
    });
  },[dispatch, fields]);

  console.log("What my soul, pages?",pages)
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
            pageIndex={i}
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
