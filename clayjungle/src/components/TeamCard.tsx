import xicon from "../images/Twitter-X-Icon-PNG.jpeg";
import x from '../images/Twitter-X-App-Icon-PNG.png'
import styles from './TeamCard.module.css'
import { light } from "@mui/material/styles/createPalette";
export interface TeamCardProps {
  memberImage: string;
  name: string;
  details: string[];
  xlink: string;
  position: string;
}

export default function TeamCard({
  memberImage,
  name,
  details,
  xlink,
  position
}: TeamCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={memberImage} alt="team member" />
      </div>
      <div>
        <div className={styles.headerContainer}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.position}>{position}</h4>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <ul>
          {details.map((value) => <li className={styles.details}>{value}</li>)}
        </ul>
      </div>
       
    </div>
  )
}
