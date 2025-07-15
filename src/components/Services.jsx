import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation('services');
  const items = t('items', { returnObjects: true });

  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">{t('title')}</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6 text-center" key={index}>
              <div className="mt-5">
                <div className="mb-2">
                  {index === 0 && <i className="bi-code-square fs-1 text-primary"></i>}
                  {index === 1 && <i className="bi-diagram-3 fs-1 text-primary"></i>}
                  {index === 2 && <i className="bi-laptop fs-1 text-primary"></i>}
                </div>
                <h3 className="h4 mb-2">{item.title}</h3>
                <p className="text-muted mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
