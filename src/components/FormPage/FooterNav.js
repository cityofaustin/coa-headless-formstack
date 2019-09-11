import React from 'react';
import { Link } from '@reach/router';

import Button from 'src/components/sections/Button';
import 'src/components/FormPage/FooterNav.scss';

const FooterNav = ({ pageNumber, landingPagePath, pages }) => {
  const backPath = (pageNumber === 0) ? landingPagePath : pages[pageNumber-1].path;
  const backButton = (
    <Button>
      <Link
        to={backPath}
      >
        Back
      </Link>
    </Button>
  );

  const { nextPath, nextText } = (pageNumber === pages.length-1) ?
    { nextPath: '#', nextText: 'Submit' } :
    { nextPath: pages[pageNumber+1].path, nextText: 'Continue' }
  const nextButton = (
    <Button>
      <Link
        to={nextPath}
      >
        {nextText}
      </Link>
    </Button>
  );

  return (
    <div className="coa-FooterNav__container">
      {backButton}
      {nextButton}
    </div>
  )
}

export default FooterNav;
