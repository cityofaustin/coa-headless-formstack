import React from "react";
import { Link } from "gatsby";

const AllForms = (props) => {
  const { forms } = props.pageContext;
  return (
    <div>
      <h1>Here are all of the forms</h1>
      <ul>
        {forms.map((form, i)=>(
          <li key={i}>
            <Link to={`/forms/${form.name}`}>
              {form.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllForms;
