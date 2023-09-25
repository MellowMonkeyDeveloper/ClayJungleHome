import claype1 from "../images/claype1.png";
import claype2 from "../images/claype2.png";
import claype3 from "../images/claype3.png";
import claype4 from "../images/claype4.png";
import claype5 from "../images/claype5.png";
import claype6 from "../images/claype6.png";
import claype7 from "../images/claype7.png";
import claype8 from "../images/claype8.png";
import claype9 from "../images/claype9.png";
import claype10 from "../images/claype10.png";
import styles from "./Landing.module.css";
import claypeBackground from "../images/claypeMobileBackground2.png";
import clayJungle from "../images/clayjungleBannerTrans.png";
import { SetStateAction, Dispatch, useState, useEffect } from "react";
import { ArrowDownward } from "@mui/icons-material";

interface Landing {
  transition: Dispatch<SetStateAction<boolean>>;
}

export default function Landing({ transition }: Landing) {
  const [headerActive, setHeaderActive] = useState<boolean>(false);
  const [containerActive, setContainerActive] = useState<boolean>(false);
  const [swingActive, setSwingActive] = useState<boolean>(false);

  useEffect(() => {
    const handleTransition = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 75) {
        setContainerActive(true);

        window.removeEventListener("scroll", handleTransition);
      }
    };

    window.addEventListener("scroll", handleTransition);
    return () => {
      window.removeEventListener("scroll", handleTransition);
    };
  }, []);

  return (
    <div
      className={containerActive ? styles.containerAnimation : styles.container}
    >
      <div
        className={
          containerActive ? styles.containerAnimation : styles.clayLayer
        }
      >
        <div className={styles.headerContainer}>
          <img className={styles.headerImage} src={clayJungle} alt="" />
        </div>
        <div className={styles.buttonContainer}>
          <h2 className={styles.swingHeader}>Swing Down</h2>
        </div>
      </div>
    </div>
  );
}
