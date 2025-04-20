import { blogData } from "@/fakeData/blogData";
import styles from "./Blog.module.css";
import BlogCard from "./BlogCard";

const BlogGridContainer = () => {
  return (
    <div className="container">
      <div className={styles.blogGrid}>
        {blogData.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogGridContainer;
