import React from 'react';
import { Link } from '@reach/router';

import Button from 'src/common/Button';
import 'src/FormPage/FooterNav.scss';

const FooterNav = ({ pageIndex, formHomePath, pages }) => {
  const backPath = (pageIndex === 0) ? formHomePath : pages[pageIndex-1].path;
  const backButton = (
    <Button>
      <Link
        to={backPath}
      >
        Back
      </Link>
    </Button>
  );

  const { nextPath, nextText } = (pageIndex === pages.length-1) ?
    { nextPath: '#', nextText: 'Submit' } :
    { nextPath: pages[pageIndex+1].path, nextText: 'Continue' }
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
