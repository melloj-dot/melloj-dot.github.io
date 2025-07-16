import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '/src/config/portfolioData.js';

function Portfolio() {
  const { t } = useTranslation('portfolio');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.SimpleLightbox) {
        const lightbox = new window.SimpleLightbox('.portfolio-box', {
          captions: true,
          captionsData: 'title',
          captionDelay: 250,
        });

        window._lightbox = lightbox;
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <h1 className="text-center mt-0">{t('title')}</h1>
        <hr className="divider" />
        <div className="row g-0">
          {projects.map((project, idx) => (
            <div key={idx} className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href={project.image}
                title={project.title}
              >
                <img
                  className="img-fluid"
                  src={project.image}
                  alt={project.title}
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    {project.description}
                  </div>
                  <div className="project-name">{project.title}</div>
                  {project.details && (
                    <div className="project-details text-white-50 mt-1">
                      {project.details}
                    </div>
                  )}
                </div>
              </a>
              <div className="text-center my-2">
                {project.isPrivate ? (
                  <span>{t('privateRepo')}</span>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t('viewCode')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
