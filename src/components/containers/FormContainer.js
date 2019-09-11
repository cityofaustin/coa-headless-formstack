import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/components/containers/FormPage';
import FormLandingPage from 'src/components/sections/FormLandingPage';
import FormHeader from 'src/components/sections/FormHeader';
import reducer from 'src/redux/reducer';
import { getPages } from 'src/helpers/data';

const store = createStore(reducer, {
  lang: "en",
  fields: {},
});

const FormContainer = (props) => {
  const { data } = props.pageContext;
  const { fields, coaConfig: {name, pathPrefix} } = data;
  const pages = getPages(fields, pathPrefix);
  console.log("fields", fields);

  // Populate our redux store with initial values
  useEffect(()=>{
    const initialFieldValues = fields.reduce((initialFieldValues, field)=>{
      initialFieldValues[field.id]=null;
      return initialFieldValues;
    },{})
    console.log("~~~~ highly effective")
  },[fields]);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default FormContainer;
