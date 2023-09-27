import { Dispatch, SetStateAction } from "react";
import styles from "./Nav.module.css";
import { Close } from "@mui/icons-material";
import React from "react";

interface NavbarProps {
  close: Dispatch<SetStateAction<boolean>>
  expand: Dispatch<SetStateAction<boolean>>
}

export default function Nav({close, expand}: NavbarProps) {
  interface NavArrayProps {
    label: string;
    path: string;
  }

  const handleClose = () => {
    console.log('close')
    close(false)
    expand(false)
  }

  const handleTransition = (path: string) => {
    close(false)
    expand(false)
    scrollToSection(path)
  }

  const navArray: NavArrayProps[] = [
    { label: "About", path: "#about" },
    { label: "Collections", path: "#collections" },
    { label: "$JUNGLE", path: "#jungle" },
    { label: "Expedition", path: "#roadmap" },
    { label: "Team", path: "#team" },
  ];

  function scrollToSection(id: any) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.closeContainer}>
        <Close onClick={handleClose} className={styles.closeIcon} />
      </div>
      <ul className={styles.ul}>
        {navArray.map((value: NavArrayProps) => (
          <li className={styles.li}>
            <a onClick={() => handleTransition(value.path)} className={styles.a} href={value.path}>
              {value.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
