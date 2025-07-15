import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation('contact');

  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">{t('title')}</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">{t('description')}</p>
          </div>
        </div>

        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+54 3573 442422</div>
            <div className="text-muted small">{t('phone')}</div>
          </div>
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-envelope fs-2 mb-3 text-muted"></i>
            <div>
              <a href="mailto:jose.caramello.jobs@gmail.com">jose.caramello.jobs@gmail.com</a>
            </div>
            <div className="text-muted small">{t('email')}</div>
          </div>
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-linkedin fs-2 mb-3 text-muted"></i>
            <div>
              <a href="https://www.linkedin.com/in/jose-caramello/">LinkedIn</a>
            </div>
            <div className="text-muted small">{t('linkedin')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
