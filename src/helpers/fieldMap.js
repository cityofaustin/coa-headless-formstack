import React from 'react';

import Text from 'src/components/fields/Basic/Text';
import TextArea from 'src/components/fields/Basic/TextArea';
import Checkbox from 'src/components/fields/Basic/Checkbox';
import SectionHeading from 'src/components/FormPage/SectionHeading';

const CoaFallbackComponent = (props) => (
  <div>
    404! We can't render {props.field.type} yet.
  </div>
);

const NOT_A_FORM_FIELD = 'NOT_A_FORM_FIELD';

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
    initialValue: '',
  },
  'datetime': {
    component: Text,
    initialValue: '',
  },
  'section': {
    component: SectionHeading,
    initialValue: NOT_A_FORM_FIELD,
  },
  'coa_test_fallback': {
    component: CoaFallbackComponent,
    initialValue: null,
  }
};

export const getFieldComponent = (field) => {
  return (fieldMap[field.type] || fieldMap.coa_test_fallback).component;
}

export const setFieldInitialValue = (fieldInitialValues, field) => {
  const initialValue = (fieldMap[field.type] || fieldMap.coa_test_fallback).initialValue;
  if (initialValue !== NOT_A_FORM_FIELD) {
    fieldInitialValues[field.id] = initialValue;
  }
  return fieldInitialValues;
}
