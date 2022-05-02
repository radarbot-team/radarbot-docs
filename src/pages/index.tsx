import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./home.module.css";
import Translate from "@docusaurus/Translate";
//  <strong>free to use</strong>, forever!
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>RadarBot</h1>
            <h2>
              <Translate id="header.title.id">
                The next generation of Discord Bot for flight simmers
              </Translate>
            </h2>
            <p>
              <Translate id="header.description.id">
                RadarBot is a Discord bot mande by flight simmers for flight
                simmers. It is a powerful tool that helps on every flight or ATC
                session with great features. And RadarBot is **free to use**,
                forever!
              </Translate>
            </p>

            <div className={styles.features}>
              <ul>
                <li>
                  <i className="fa fa-check"></i>
                  <span>METAR</span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>TAF</span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <Translate id="header.charts.id">
                      Charts (for Brazil and UEA)
                    </Translate>
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <Translate id="header.network.id">
                      Network pilot/atc info (Vatsim and IVAO)
                    </Translate>
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <Translate id="header.translation.id">
                      Multi language (supports Portuguese, English and French)
                    </Translate>
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <Translate id="header.screenshots.id">
                      Screenshots poll system
                    </Translate>
                  </span>
                </li>
                <li>
                  <i className="fa fa-check"></i>
                  <span>
                    <Translate id="header.liveflights.id">
                      Real flights live information
                    </Translate>
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.buttons}>
              <button
                className={clsx(styles.btn__hover, styles.btn__hover__color)}
              >
                <a
                  href="https://bit.ly/RadarBotInvite"
                  className={styles.button}
                >
                  <Translate id="header.btn1.id">Add to Discord</Translate>
                </a>
              </button>
              <button
                className={clsx(styles.btn__hover, styles.btn__hover__color)}
              >
                <a
                  href="docs/intro"
                  title="{{ page.next_page.title | striptags }}"
                >
                  <Translate id="header.btn2.id">Documentation</Translate>
                </a>
              </button>
            </div>
          </div>

          <div className={styles.right}>{/* <CodeIcon width={'50%'} /> */}</div>
        </div>
      </main>
    </Layout>
  );
}
