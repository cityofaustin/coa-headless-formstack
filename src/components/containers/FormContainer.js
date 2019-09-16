import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/components/FormPage/FormPage';
import FormLandingPage from 'src/components/sections/FormLandingPage';
import FormHeader from 'src/components/sections/FormHeader';
import { getFieldInitialValues } from 'src/helpers/fieldMap';
import { SET_INITIAL_FIELD_VALUES } from 'src/redux/actions';

const FormContainer = (props) => {
  const dispatch = useDispatch();
  const { name, formHomePath, pages } = props.pageContext;

  // Populate our redux store with initial values for each form field
  // Note: I deliberately did not add "pages" props as a dependency.
  // useEffect() does not work for this deeply nested object.
  // Adding ["pages"] caused this useEffect to re-trigger, even when my pages props had not changed.
  // https://github.com/facebook/react/issues/15865, https://stackoverflow.com/questions/54095994/react-useeffect-comparing-objects
  useEffect(()=>{
    dispatch({
      type: SET_INITIAL_FIELD_VALUES,
      pages: pages,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch]);

  console.log("~~pages", pages)

  return (
    <div>
      Hi
    </div>
  )

  return (
    <div>
      <FormHeader
        landingPagePath={formHomePath}
      />
      <Router>
        <FormLandingPage
          path={formHomePath}
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
            landingPagePath={formHomePath}
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
