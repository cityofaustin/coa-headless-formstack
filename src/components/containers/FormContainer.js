import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/components/FormPage/FormPage';
import FormLandingPage from 'src/components/sections/FormLandingPage';
import FormHeader from 'src/components/sections/FormHeader';
import formatFieldsAndPages from 'src/helpers/formatFieldsAndPages';
import { getFieldInitialValues } from 'src/helpers/fieldMap';
import { SET_INITIAL_FIELD_VALUES } from 'src/redux/actions';

const FormContainer = (props) => {
  const dispatch = useDispatch();
  const { data } = props.pageContext;
  const { fields: preprocessedFields, coaConfig: {name, pathPrefix} } = data;
  const { fields, pages } = formatFieldsAndPages(preprocessedFields, pathPrefix);

  // Populate our redux store with initial values for each form field
  // Note: I deliberately did not add "fields" props as a dependency.
  // useEffect() does not work for this deeply nested object.
  // Adding ["fields"] caused this useEffect to re-trigger, even when my fields props had not changed.
  // https://github.com/facebook/react/issues/15865, https://stackoverflow.com/questions/54095994/react-useeffect-comparing-objects
  useEffect(()=>{
    dispatch({
      type: SET_INITIAL_FIELD_VALUES,
      fields: getFieldInitialValues(fields),
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch]);

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
