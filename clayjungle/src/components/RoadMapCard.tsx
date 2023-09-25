import styles from './RoadMap.module.css'

export interface RoadMapCardProps {
  array: string[];
  header: string
}

export default function RoadMapCard({ array, header }: RoadMapCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3 className={styles.header}>{header}</h3>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.ul}>
          {array.map((value: string) => (
            <li className={styles.li}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
