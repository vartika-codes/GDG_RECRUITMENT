import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function BlogDetails({
  blogs,
  bookmarks,
  toggleBookmark,
  likeBlog,
}) {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  if (!blog) {
    return (
      <main className="not-found">
        <h1>Article not found</h1>
        <p>This article may no longer be available.</p>
        <Link to="/">← Back to stories</Link>
      </main>
    );
  }

  const submitComment = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        text: comment,
      },
    ]);

    setComment("");
  };

  const isBookmarked = bookmarks.includes(blog.id);

  return (
    <main className="article-page">

      <Link to="/" className="back-link">
        ← Back to stories
      </Link>


      <div className="article-header">

        <span className="article-category">
          {blog.category}
        </span>

        <h1>{blog.title}</h1>

        <p className="article-excerpt">
          {blog.excerpt}
        </p>

        <div className="article-meta">
          <span>By {blog.author}</span>
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>

      </div>


      <img
        className="article-image"
        src={blog.image}
        alt={blog.title}
      />


      <div className="article-layout">

        <article className="article-content">

          {blog.content
            .trim()
            .split("\n")
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}

        </article>


        <aside className="article-actions">

          <button onClick={() => likeBlog(blog.id)}>
            ♥ {blog.likes}
          </button>

          <button
            onClick={() => toggleBookmark(blog.id)}
          >
            {isBookmarked
              ? "★ Saved"
              : "☆ Save"}
          </button>

        </aside>

      </div>


      <section className="comments">

        <h2>Comments</h2>

        <form onSubmit={submitComment}>

          <textarea
            placeholder="Share your thoughts..."
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
          />

          <button type="submit">
            Post comment
          </button>

        </form>


        {comments.length === 0 ? (
          <p className="no-comments">
            No comments yet. Be the first to comment.
          </p>
        ) : (
          <div className="comment-list">

            {comments.map((item) => (
              <div
                className="comment"
                key={item.id}
              >
                <p>{item.text}</p>
              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}

export default BlogDetails;