import BlogCard from "../components/BlogCard";

function Bookmarks({
  blogs,
  bookmarks,
  toggleBookmark,
}) {
  const savedBlogs = blogs.filter((blog) =>
    bookmarks.includes(blog.id)
  );

  return (
    <main className="bookmarks-page">

      <div className="page-heading">
        <span>SAVED</span>
        <h1>Your bookmarks</h1>
        <p>
          Articles you want to come back to.
        </p>
      </div>


      {savedBlogs.length === 0 ? (
        <div className="empty-state">

          <div>☆</div>

          <h2>No saved stories</h2>

          <p>
            Bookmark an article and it will appear here.
          </p>

        </div>
      ) : (
        <div className="blog-grid">

          {savedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              isBookmarked={true}
              onBookmark={toggleBookmark}
            />
          ))}

        </div>
      )}

    </main>
  );
}

export default Bookmarks;