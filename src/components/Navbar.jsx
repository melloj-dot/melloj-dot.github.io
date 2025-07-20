import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation('navbar');

  useEffect(() => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

    const handleClick = () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    };

    responsiveNavItems.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    // Limpieza
    return () => {
      responsiveNavItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

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
