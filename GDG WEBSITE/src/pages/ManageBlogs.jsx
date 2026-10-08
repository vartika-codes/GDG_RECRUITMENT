import { Link } from "react-router-dom";

function ManageBlogs({ blogs, onDelete }) {
  return (
    <main className="manage-page">

      <div className="manage-heading">
        <div>
          <span>MANAGEMENT</span>
          <h1>Your stories</h1>
        </div>

        <Link to="/create" className="new-blog-btn">
          + New Article
        </Link>
      </div>


      {blogs.length === 0 ? (
        <div className="empty-state">
          <h2>No articles yet</h2>
          <p>Create your first article.</p>
        </div>
      ) : (
        <div className="manage-list">

          {blogs.map((blog) => (
            <div className="manage-item" key={blog.id}>

              <div>
                <span>{blog.category}</span>
                <h2>{blog.title}</h2>
                <p>
                  {blog.author} · {blog.date}
                </p>
              </div>

              <div className="manage-actions">

                <Link to={`/blog/${blog.id}`}>
                  View
                </Link>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Delete this article?"
                      )
                    ) {
                      onDelete(blog.id);
                    }
                  }}
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}

export default ManageBlogs;