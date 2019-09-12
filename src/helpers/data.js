const sanitizePath = (title) => title.replace(/\s/g, "-").replace(/[^\w-]/g, "").toLowerCase();

/**
  Splits fields into 2 arrays.
  fieldsForOnePage => fields that are used for first FormPage
  fieldsForNextPages => fields after the section_break (page break) that are used on following FormPages
**/
const getFieldsForOnePage = (fields) => {
  let i=0; // fields[0] is expected to have a section_break in multipage forms
  let fieldsForOnePage = fields;
  let fieldsForNextPages = [];
  while (i < fields.length) {
    if (i>0 && !!fields[i].section_break) {
      fieldsForOnePage = fields.slice(0,i);
      fieldsForNextPages = fields.slice(i);
      break;
    }
    i++;
  }
  return {
    fieldsForOnePage,
    fieldsForNextPages,
  }
}

export const formatFieldsAndPages = (fields, pathPrefix) => {
  const pages = [];
  let fieldsForNextPages = fields;
  while (fieldsForNextPages.length) {
    const result = getFieldsForOnePage(fieldsForNextPages);
    const fields = result.fieldsForOnePage;
    fieldsForNextPages = result.fieldsForNextPages;
    // If a Form Page doesn't start with a Formstack "section" field, then make a default
    if (fields[0].type !== "section") {
      fields.unshift({
        type: "section",
        section_break: true,
        section_heading: `Page ${pages.length+1}`,
        section_text: "",
      })
    }
    const title = fields[0].section_heading;
    const path = `${pathPrefix}/${sanitizePath(title)}`;
    pages.push({ fields, path, title });
  }
  return {
    pages,
    fields: pages.reduce((fields, page)=>[...fields, ...page.fields],[]),
  }
};
