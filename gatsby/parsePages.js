const sanitizePath = (title) => title.replace(/\s/g, "-").replace(/[^\w-]/g, "").toLowerCase();

// Takes flat array of fields and structures them into pages and sections within pages
const parsePages = (fields, formHomePath) => {
  let pages = [];
  let currentPage, currentPageSections=[], currentSection, currentSectionFields=[];

  let i=0;
  while (i < fields.length) {
    const field = fields[i];

    if ((i === 0) && ((field.type !== "section") || (!field.section_break))) {
      // If the form doesn't have an initial new page section header, make a generic one.
      currentPage = {
        sectionField: {
          section_heading: "Start",
          hide_label: "1",
        },
        path: `${formHomePath}/start`,
        sections: [],
      }
      currentPageSections = currentPage.sections;
      currentSection = {
        sectionField: null,
        fields: [],
      }
      currentSectionFields = currentSection.fields;
    }

    if (field.type === "section") {
      // Finish the last array of currentSectionFields
      !!currentSectionFields.length && currentPageSections.push(currentSection);

      if (!!field.section_break) {
        // If we're starting a new page, end the last currentPage
        !!currentPageSections.length && pages.push(currentPage);

        // Start a new currentPage
        const pageTitle = field.section_heading;
        currentPage = {
          sectionField: field,
          path: `${formHomePath}/${sanitizePath(field.section_heading)}`,
          sections : [],
        };
        currentPageSections = currentPage.sections;
        currentSection = {
          sectionField: null,
          fields: [],
        };
      } else {
        // If we're starting a new section on an existing page
        currentSection = {
          sectionField: field,
          fields: [],
        }
      }
      // Start new array of currentSectionFields
      currentSectionFields = currentSection.fields;
    } else {
      // If field type is not a section, then add it to currentSectionFields
      currentSectionFields.push(field);
    }
    i++;
  }

  currentSectionFields.length && currentPageSections.push(currentSection);
  currentPageSections.length && pages.push(currentPage);
  return pages;
}

export default parsePages;
