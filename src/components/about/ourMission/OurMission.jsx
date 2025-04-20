import styles from "./Mission.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/image";

const OurMission = () => {
  return (
    <div>
      <div className={styles.missionContainer}>
        <div className="container">
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionDescription}>
            Our mission is clear: to empower businesses of all sizes, from
            startups to enterprises, to flourish on the global stage. We believe
            that the world of trade should be accessible to all, and we are
            dedicated to breaking down barriers, creating opportunities, and
            fostering fruitful partnerships.
          </p>
        </div>
      </div>
      <div className={`${styles.meetingImageContainer} container`}>
        <div className={styles.videoPlayIconWrapper}>
          <Image
            src={"https://i.ibb.co/qJFMZYY/meeting.png"}
            alt="meeting image"
            width={1200}
            height={576}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <div className={styles.playIcon}>
            <BsFillPlayFill color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
