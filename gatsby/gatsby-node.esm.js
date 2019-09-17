import axios from 'axios';

import parsePages from './parsePages';

const forms = [
  // {
  //   name: 'police-complain',
  //   id: 3568666,
  // },
  {
    name: 'nick-test',
    id: 3585883,
  }
];

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("../src/staticPages/index.js"),
  });

  createPage({
    path: `/forms`,
    component: require.resolve("../src/staticPages/forms.js"),
    context: { forms },
  });

  await Promise.all(forms.map(async (form)=>{
    const { data: { fields: fields } } = await axios.get(
      `https://www.formstack.com/api/v2/form/${form.id}.json`,
      { headers: { Authorization: `Bearer ${process.env.FORMSTACK_API_TOKEN}` } },
    );
    // const { fields } = require('../local/formstackCache.js');
    const formHomePath = `/forms/${form.name}`;
    const pages = parsePages(fields, formHomePath);
    createPage({
      path: formHomePath,
      matchPath: `${formHomePath}/*`, // Allows dynamic routing
      component: require.resolve("../src/FormContainer/FormContainerProvider.js"),
      context: {
        ...form,
        formHomePath,
        pages,
      },
    })
  }));
};
