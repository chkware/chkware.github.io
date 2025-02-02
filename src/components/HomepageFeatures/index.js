import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// import rev from "@site/static/img/chkware_revolutionize_api_test.svg"
// import acc from "@site/static/img/chkware_accelerate_api_dev.svg"
// import def from "@site/static/img/chkware_define_expectations.svg"

const FeatureList = [
  {
    title: "Revolutionize Your API Testing – Achieve Up to 4x Faster Automation!",
    Svg: require("@site/static/img/chkware_revolutionize_api_test.svg").default,
    // Image: rev,
    description: (
      <>
        Boost efficiency and deliver results with unmatched speed and reliability.
      </>
    ),
  },
  {
    title: "Accelerate Your API Development – Launch Projects Faster Than Ever!",
    Svg: require("@site/static/img/chkware_accelerate_api_dev.svg").default,
    // Image: acc,
    description: (
      <>
        Streamline your workflow with tools designed for speedy delivery and precision in mind.
      </>
    ),
  },
  {
    title: "Define Your Expectations – Let Us Handle the Details!",
    Svg: require("@site/static/img/chkware_define_expectations.svg").default,
    // Image: def,
    description: (
      <>
        Simplify API testing with low-code automation that delivers accuracy and robustness.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
// function Feature({ Image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        {/* <Image className={styles.featureSvg} /> */}
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
