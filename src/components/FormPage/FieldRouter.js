import React from 'react';

import Text from 'src/components/fields/Basic/Text';
import TextArea from 'src/components/fields/Basic/TextArea';
import Checkbox from 'src/components/fields/Basic/Checkbox';

const FieldRouter = (props) => {
  switch (props.field.type) {
    case 'text':
      return <Text {...props} />;
    case 'textarea':
      return <TextArea {...props} />;
    case 'checkbox':
      return <Checkbox {...props} />;
    default:
      return (
        <div>
          404! We can't render {props.field.type} yet.
        </div>
      )
  }
};

export default FieldRouter;
