import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import FormContainer from 'src/components/containers/FormContainer';
import reducer from 'src/redux/reducer';

const store = createStore(reducer, {
  lang: "en",
  fieldValues: {},
});

const FormRoot = (props) => {
  return (
    <Provider store={store}>
      <FormContainer {...props} />
    </Provider>
  );
};

export default FormRoot;
