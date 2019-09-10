import React from "react";
import { Link } from "gatsby";

import Layout from "src/components/Base/layout";

const IndexPage = (props) => {
  const { forms } = props.pageContext;
  console.log("What are my forms?", forms)

  return (
    <Layout>
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
    </Layout>
  );
};

export default IndexPage;
