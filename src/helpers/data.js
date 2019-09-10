export const hyphenate = (title) => title.replace(/\s/g, "-").toLowerCase();

/**
  Splits fields into 2 arrays.
  fieldsForOnePage => fields that are used for first FormPage
  fieldsForNextPages => fields after the section_break (page break) that are used on following FormPages
**/
const getFieldsForOnePage = (fields) => {
  let i=1; // fields[0] is expected to have a section_break in multipage forms
  let fieldsForOnePage = fields;
  let fieldsForNextPages = [];
  while (i < fields.length) {
    if (!!fields[i].section_break) {
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

export const getPages = (fields, pathPrefix) => {
  const pages = [];
  let fieldsForNextPages = fields;
  while (fieldsForNextPages.length) {
    const result = getFieldsForOnePage(fieldsForNextPages);
    const fields = result.fieldsForOnePage;
    const heading = fields[0].section_heading;
    const path = `${pathPrefix}/${pages.length}`;
    pages.push({ fields, heading, path, });
    fieldsForNextPages = result.fieldsForNextPages;
  }
  return pages;
};
