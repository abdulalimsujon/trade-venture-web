import { whyChooseData } from "@/fakeData/whyChooseData";
import styles from "./WhyChoose.module.css";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className={styles.whyChooseSection}>
      <div className="container">
        <h2 className={styles.whyChooseTitle}>Why Choose Us</h2>

        <div className={styles.whyChooseGridDiv}>
          {whyChooseData.map((data) => (
            <div key={data.id} className={styles.whyChooseWrapperCard}>
              <div className={styles.imageCenter}>
                <Image
                  src={data.image}
                  alt="icons"
                  width={60}
                  height={60}
                  styles={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h2 className={styles.cardTitle}>{data?.title}</h2>
              <p className={styles.cardText}>
                We ve built a vast network of partners, investors, and
                entrepreneurs from every corner of the globe.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
