import Image from "next/image";
import future1 from "../../../assets/about/future1.png";
import future2 from "../../../assets/about/future2.png";
import future3 from "../../../assets/about/future3.png";
import future4 from "../../../assets/about/future4.png";

import styles from "./JoinForFutureTeam.module.css";

const JoinForFutureTeam = () => {
  return (
    <div className={styles.joinForFutureSection}>
      <div className="container">
        <div className={styles.joinForFutureSectionTitle}>
          <h2>Join Us in Shaping the Future</h2>
          <p>
            Whether you are looking to expand your business, find exciting
            investment opportunities, or embark on a new venture, Trade Ventures
            is here to make your journey smoother, faster, and more rewarding.
          </p>
        </div>

        <div className="">
          <div className={styles.bigImage}>
            <Image src={future1} alt="future One" width={1199} height={476} />
          </div>
          <div className={styles.smallImageContainer}>
            <div className={styles.colSpan5}>
              <Image src={future2} alt="" width={488} height={364} />
            </div>
            <div className={styles.colSpan4}>
              <Image src={future3} alt="" width={387} height={364} />
            </div>
            <div className={styles.colSpan3}>
              <Image src={future4} alt="" width={285} height={364} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinForFutureTeam;
