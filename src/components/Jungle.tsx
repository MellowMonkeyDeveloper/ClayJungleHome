import snake from "../images/snakekowski.png";
import React from "react";
import styles from "./Jungle.module.css";
import snakeWeb from "../images/snakekowski.webp";
import ImageFallback from "./ImageFallback";
import { Suspense } from "react";

const LazyLoadImage = React.lazy(() => import("./ImageLazy"));

export default function Jungle() {
  return (
    <div className={styles.container}>
      <div className={styles.jungleCard}>
        <div className={styles.headerContainer}>
          <h3 className={styles.header}>Utility</h3>
        </div>
        <div className={styles.detailsContainer}>
          <p className={styles.details}>
            Currently our native token is known as $PEZ. $PEZ is primarily used
            as a raffle token at Mutant Labs. We are currently transitioning the
            token to $JUNGLE. More details COMING SOON.
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <a
                className={styles.anchor}
                href="https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=2beee0cc2adb4d754f7747b13541f324ce0d23c8785dd1b521346f28&tokenNameB=70657a"
              >
                Buy
              </a>
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <a
                className={styles.anchor}
                href="https://claypez.ada-anvil.io/en/"
              >
                Stake
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Suspense
          fallback={
            <ImageFallback
              imageStyle={styles.webImage}
              className={styles.image}
              src={snake}
              alt="Snakekowski"
            />
          }
        >
          <LazyLoadImage
            imageStyle={styles.webImage}
            className={styles.image}
            src={snake}
            srcSet={snakeWeb}
            alt="Snakekowski"
          />
        </Suspense>
      </div>
    </div>
  );
}
