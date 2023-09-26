import styles from "./CollectionsCard.module.css";
import ImageLazy from "./ImageLazy";

export interface CollectionsCardProps {
  image: string;
  altImage: string;
  supply: number;
  jungle: string;
  jpgstorelink: string;
  name: string;
  webImage: string;
  alt: string;
}

export default function CollectionsCard({
  image,
  supply,
  altImage,
  jungle,
  jpgstorelink,
  name,
  webImage,
  alt
}: CollectionsCardProps) {
  return (
    <div className={styles.collectionsCard}>
      <div className={styles.headerContainer}>
        <h3 className={styles.header}>{name}</h3>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <ImageLazy imageStyle={styles.webImage} alt={alt} className={styles.image} src={image} srcSet={webImage} />
        </div>
        <div className={styles.cardDetailsContainer}>
          <div className={styles.detailHeaderContainer}>
            <div className={styles.labelHeadContainer}>
              <h4 className={styles.supplyHeader}>Supply</h4>
            </div> 
            <div className={styles.labelContainer}>
              <h5 className={styles.supplySpan}>{supply}</h5>
            </div>
          </div>
          <div className={styles.detailHeaderContainer}>
            <div className={styles.labelHeadContainer}>
              <h4 className={styles.jungleHeader}>$JUNGLE</h4>
            </div>
            <div className={styles.labelContainer}>
              <h5 className={styles.jungleSpan}>{jungle}</h5>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <a className={styles.anchor} href={jpgstorelink}>
                jpg.store
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
