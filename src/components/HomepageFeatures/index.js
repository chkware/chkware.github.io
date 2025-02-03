import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title:
      "Revolutionize Your API Testing – Achieve Up to 4x Faster Automation!",
    imageData: require("@site/static/img/chkware_revolutionize_api_test.png")
      .default,
    description: (
      <>
        Boost efficiency and deliver results with unmatched speed and
        reliability.
      </>
    ),
  },
  {
    title:
      "Accelerate Your API Development – Launch Projects Faster Than Ever!",
    imageData: require("@site/static/img/chkware_accelerate_api_dev.png")
      .default,
    description: (
      <>
        Streamline your workflow with tools designed for speedy delivery and
        precision in mind.
      </>
    ),
  },
  {
    title: "Define Your Expectations – Let Us Handle the Details!",
    imageData: require("@site/static/img/chkware_define_expectations.png")
      .default,
    description: (
      <>
        Simplify API testing with low-code automation that delivers accuracy and
        robustness.
      </>
    ),
  },
];

function Feature({ imageData, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imageData} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
