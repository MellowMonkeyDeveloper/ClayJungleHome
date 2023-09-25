import React, { useState } from "react";
import { Lan, Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import Nav from "./components/Nav";
import snake from "./images/snakekowski.png";
import styles from "./App.module.css";
import claype1 from "./images/claype1.png";
import claype2 from "./images/claype2.png";
import Jungle from "./components/Jungle";
import RoadMapCard from "./components/RoadMapCard";
import TeamCard from "./components/TeamCard";
import kirby from "./images/kirbyEdit2.png";
import dominic from "./images/dominicEdit2.png";
import EnterSite from "./components/EnterSite";
import mintromney from "./images/mintRomneyEdit2.png";
import mainMellowMonkey from "./images/clayJungleMAINBackground.png";
import CollectionsCard, {
  CollectionsCardProps,
} from "./components/CollectionsCard";
import nftaki from "./images/nftaki.jpeg";
import snakeTrnas2 from "./images/transSnake2.png";

function App() {
  const [load, setLoad] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const [landingTransition, setLandingTransition] = useState<boolean>(false);
  const [appDisplay, setAppDisplay] = useState<boolean>(false);
  const handleExpand = () => {
    console.log("expand");
    setAppDisplay(true);

    setExpand(true);
  };

  const handleClose = () => {
    console.log("close");
    setExpand(false);
    setAppDisplay(true);
  };

  const collections: CollectionsCardProps[] = [
    {
      name: "Clay Monkeys",
      image: snake,
      altImage: "snakekowski",
      supply: 6000,
      jungle: "10-80",
      jpgstorelink: "https://www.jpg.store/collection/claypez?tab=activity",
    },
    {
      name: "Claypemations",
      image: claype1,
      altImage: "snakekowski",
      supply: 3333,
      jungle: "13-104",
      jpgstorelink: "https://www.jpg.store/collection/claypemationsbyclaypez",
    },
    {
      name: "1 of 1",
      image: claype2,
      altImage: "snakekowski",
      supply: 1,
      jungle: "10-80",
      jpgstorelink: "https://www.jpg.store/collection/claypez1of1s",
    },
  ];

  const roadMapSwing1 = ["Kirby Takeover", "Establish Team", "COMPLETE"];
  const roadMapSwing2 = ["More COMING SOON"];

  return (
    <>
      <section className={styles.app}>
        {appDisplay && (
          <div className={styles.navDetails}>
            <Nav expand={setExpand} close={setAppDisplay} />
          </div>
        )}
        {!appDisplay && (
          <div className={styles.appContainerFlex}>
            <div className={styles.navContainer}>
              <div className={styles.navZContainer}>
                <div className={styles.logoContainer}>
                  {!expand && (
                    <Menu className={styles.menu} onClick={handleExpand} />
                  )}
                </div>
              </div>
            </div>
            <section className={styles.mellowImageSection}>
              <img
                className={styles.mellowImage}
                src={mainMellowMonkey}
                alt=""
              />
            </section>
            <section className={styles.topSection}>
              <article id="about" className={styles.aboutSection}>
                <div className={styles.aboutImageContainer}>
                  <img
                    className={styles.aboutImage}
                    src={snakeTrnas2}
                    alt="snakekowski claype"
                  />
                </div>
                <div className={styles.aboutCard}>
                  <div className={styles.aboutHeaderContainer}>
                    <h2 className={styles.aboutHeader}>About</h2>
                  </div>
                  <div className={styles.aboutDetailsContainer}>
                    <p className={styles.aboutDetails}>
                      Clay Jungle, previously Claypez, was recently purchased by
                      Kirby. The most loyal community member is now in charge.
                      More details about the project are COMING SOON.
                    </p>
                  </div>
                </div>
              </article>
            </section>
            <section id="collections" className={styles.collectionsSection}>
              <div className={styles.collectionsSectionZ}>
                <div className={styles.collectionsHeaderContainer}>
                  <h2 className={styles.sectionHeader}>Collections</h2>
                </div>
                <div className={styles.collectionCardsContainer}>
                  {collections.map((value: any) => (
                    <CollectionsCard
                      jungle={value.jungle}
                      supply={value.supply}
                      jpgstorelink={value.jpgstorelink}
                      name={value.name}
                      image={value.image}
                      altImage={value.altImage}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section id="jungle" className={styles.jungleSection}>
              <h2 className={styles.sectionHeader}>$JUNGLE</h2>
              <Jungle />
            </section>
            <section id="roadmap" className={styles.roadMapSection}>
              <div className={styles.roadMapSectionZ}>
                <h2 className={styles.sectionHeader}>Expedition</h2>
                <div className={styles.roadMapCard1}>
                  <RoadMapCard header="Swing 1" array={roadMapSwing1} />
                </div>
                <div className={styles.roadMapCard2}>
                  <RoadMapCard header="Swing 2" array={roadMapSwing2} />
                </div>
              </div>
            </section>
            <section id="team" className={styles.teamSection}>
              <div className={styles.sectionHeaderContainer}>
                <h2 className={styles.sectionHeader}>The Team</h2>
              </div>
              <div className={styles.teamCardsContainer}>
                <div className={styles.teamCardContainer}>
                  <TeamCard
                    memberImage={kirby}
                    position="Founder"
                    name="Kirby"
                    details={[
                      "Goes by Kirby",
                      "Acquired Claypez",
                      "Whale and wanted to refresh the project",
                      "Works in Health Care IT",
                      "Loves to snowmobile and play in music groups",
                    ]}
                    xlink=""
                  />
                </div>

                <div className={styles.teamCardContainer}>
                  <TeamCard
                    memberImage={mintromney}
                    position="Moderator"
                    name="Brian"
                    details={[
                      "Goes by MintRomney",
                      "First Mod for Claypez",
                      "Works as a CDL Driver and Crane Operator",
                      "CNFT Degen by night",
                    ]}
                    xlink=""
                  />
                </div>
                <div className={styles.teamCardContainer}>
                  <TeamCard
                    memberImage={nftaki}
                    position="Moderator"
                    name="Akim"
                    details={[
                      "Goes by NFTAki",
                      "Clay Jungle got him into NFTs",
                      "Works as a Cloud Engineer",
                      "Hobbies consist of walking his dog, cars, and vacations",
                    ]}
                    xlink=""
                  />
                </div>
              </div>
            </section>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
