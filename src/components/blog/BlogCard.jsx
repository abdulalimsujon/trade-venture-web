import Image from "next/image";
import styles from "./Blog.module.css";

const BlogCard = ({ blog }) => {
  const { image, title, date, time, text } = blog;
  return (
    <div className={styles.blogWrapper}>
      <div>
        <div className={styles.imageCenter}>
          <Image src={image} alt="blog image" width={327} height={262} />
        </div>
        <div>
          <div className={styles.dateTime}>
            <span>{date}</span>
            <span>{time}</span>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
