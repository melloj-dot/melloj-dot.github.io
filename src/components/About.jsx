import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation('about');

  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">{t('title')}</h2>
            <hr className="divider divider-light" />
            <h5 className="text-white-75 mb-4">{t('subtitle')}</h5>
            <a className="btn btn-light btn-xl" href="#services">{t('button')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
