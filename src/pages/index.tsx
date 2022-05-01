import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './home.module.css';



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>RadarBot</h1>
            <h2>The next generation of Discord Bot for flight simmers</h2>
            <p>RadarBot is a Discord bot mande by flight simmers for flight simmers. It is a powerful tool that helps on every
              flight or ATC session with great features.
              And RadarBot is <strong>free to use</strong>, forever!
            </p>

            <div className={styles.features}>
              <ul>
                <li><i className="fa fa-check"></i><span>METAR</span></li>
                <li><i className="fa fa-check"></i><span>TAF</span></li>
                <li><i className="fa fa-check"></i><span>Charts (for Brazil and UEA)</span></li>
                <li><i className="fa fa-check"></i><span>Network pilot/atc info (Vatsim and IVAO)</span></li>
                <li><i className="fa fa-check"></i><span>Multi language (supports Portuguese, English and French)</span></li>
                <li><i className="fa fa-check"></i><span>Screenshots poll system</span></li>
                <li><i className="fa fa-check"></i><span>Real flights live information</span></li>
              </ul>
            </div>

            <div className={styles.buttons}>
              <button className={clsx(styles.btn__hover, styles.btn__hover__color)}><a href="https://bit.ly/RadarBotInvite" className={styles.button}>Add to Discord</a></button>
              <button className={clsx(styles.btn__hover, styles.btn__hover__color)}><a href="docs/intro"
                title="{{ page.next_page.title | striptags }}"
              >Documentation</a></button>
            </div>
          </div>

          <div className={styles.right}>
            {/* <CodeIcon width={'50%'} /> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}
