import React from 'react';

import Text from 'src/components/fields/Basic/Text';
import TextArea from 'src/components/fields/Basic/TextArea';
import Checkbox from 'src/components/fields/Basic/Checkbox';

const CoaFallbackComponent = (props) => (
  <div>
    404! We can't render {props.field.type} yet.
  </div>
);

// map from FormStack types to our components
const fieldMap = {
  'text': {
    component: Text,
    initialValue: '',
  },
  'textarea': {
    component: TextArea,
    initialValue: '',
  },
  'checkbox': {
    component: Checkbox,
    initialValue: null,
  },
  'datetime': {
    component: Text,
    initialValue: '',
  },
  'coa_test_fallback': {
    component: CoaFallbackComponent,
    initialValue: null,
  }
};

export const getFieldComponent = (type) => {
  return (fieldMap[type] || fieldMap.coa_test_fallback).component;
}

export const getFieldInitialValue = (type) => {
  return (fieldMap[type] || fieldMap.coa_test_fallback).initialValue;
}
