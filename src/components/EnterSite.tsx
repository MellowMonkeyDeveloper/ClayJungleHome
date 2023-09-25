import { SetStateAction, Dispatch } from 'react'
import styles from './EnterSite.module.css'
import background from '../images/clayJungleMAINBackground.png'
import claype1 from '../images/claype1.png'
import claype2 from '../images/claype2.png'


export interface EnterSiteProps{
    enter: Dispatch<SetStateAction<boolean>>;
}

export default function EnterSite({enter}: EnterSiteProps){

    const handleEnter = () => {
        enter(true)
    }

    return(
        <section className={styles.enterSiteSection}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={background} alt="" />
            </div>
            <div className={styles.enterButtonContainer}>
                <button onClick={handleEnter} className={styles.enterButton}>Enter</button>
            </div>
        </section>
    )
}