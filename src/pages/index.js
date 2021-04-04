import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Spells</>,
    cols: 4,
    imageUrl: 'img/wizard.png',
    description: (
      <>
        Including brand new and modified spells, OMG WOW!! What an amazing idea! I'd have never thought to make my own spells.
      </>
    ),
  },
  {
    title: <>Magic Items</>,
    cols: 4,
    imageUrl: 'img/swords.png',
    description: (
      <>
        Magic items galore! Feast your eyes on these amazing new magic items! (Anyone I actually DM for avert your eyes)
      </>
    ),
  },
  {
    title: <>My HomeBrew rule reworks</>,
    cols: 4,
    imageUrl: 'img/beer.webp',
    description: (
      <>
        Because every DM has some.
      </>
    )
  },
  {
    title: <>Disclaimer</>,
    cols: 12,
    description: (<> This website and all content within is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC. </>)
  }
];

function Feature({ imageUrl, title, description, cols }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames(`col col--${cols}`, styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Because every DM has some.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/Spells')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
