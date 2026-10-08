import { Link } from "react-router-dom";

function BlogCard({
  blog,
  isBookmarked,
  onBookmark,
}) {
  return (
    <article className="blog-card">

      <div className="card-image-wrapper">
        <img src={blog.image} alt={blog.title} />

        <button
          className={`bookmark-btn ${
            isBookmarked ? "bookmarked" : ""
          }`}
          onClick={() => onBookmark(blog.id)}
        >
          {isBookmarked ? "★" : "☆"}
        </button>

        <span className="category-tag">
          {blog.category}
        </span>
      </div>

      <div className="card-content">

        <div className="card-date">
          {blog.date} · {blog.readTime}
        </div>

        <h2>{blog.title}</h2>

        <p>{blog.excerpt}</p>

        <div className="card-bottom">
          <span>By {blog.author}</span>

          <Link to={`/blog/${blog.id}`}>
            Read →
          </Link>
        </div>

      </div>
    </article>
  );
}

export default BlogCard;