import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import styles from "./BlogPage.module.css";
import BlogGridContainer from "@/components/blog/BlogGridContainer";

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <SectionTitle title="Trade Talks" />
      <BlogGridContainer />
    </div>
  );
};

export default BlogPage;
