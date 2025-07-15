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
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="/">Jose Caramello</a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">{t('about')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">{t('services')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">{t('portfolio')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t('contact')}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
