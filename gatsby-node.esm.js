import axios from 'axios';

const forms = [
  {
    name: 'police-complain',
    id: 3568666,
  },
];

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/pages/index.js"),
  });

  createPage({
    path: `/forms`,
    component: require.resolve("./src/pages/forms.js"),
    context: { forms },
  });

  await Promise.all(forms.map(async (form)=>{
    const { data } = await axios.get(
      `https://www.formstack.com/api/v2/form/${form.id}.json`,
      { headers: { Authorization: `Bearer ${process.env.FORMSTACK_API_TOKEN}` } },
    );
    delete data.javascript;
    delete data.html;
    data.coaConfig = form;
    data.coaConfig.pathPrefix = `/forms/${form.name}`;
    createPage({
      path: `/forms/${form.name}`,
      matchPath: `/forms/${form.name}/*`, // Allows dynamic routing
      component: require.resolve("./src/components/containers/FormContainer.js"),
      context: { data },
    })
  }));
};
