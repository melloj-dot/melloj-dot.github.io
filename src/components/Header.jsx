import React from 'react';
import RotatingText from '../components/RotatingText';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation('header');

  const isEnglish = i18n.language.startsWith('en');

  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">Jose Caramello</h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5" id="animated-heading">
              <RotatingText prefix={isEnglish ? t('prefix') : ''} />
            </p>
            <a className="btn btn-primary btn-xl" href="#about">{t('button')}</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
