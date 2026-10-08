import { useState } from "react";
import BlogCard from "../components/BlogCard";

function Home({
  blogs,
  bookmarks,
  toggleBookmark,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>

      <section className="hero">

        <div className="hero-small">
          THE COMMUNITY BLOG
        </div>

        <h1>
          Ideas worth
          <br />
          <span>reading.</span>
        </h1>

        <p>
          Discover stories, technology, design and ideas
          from curious minds.
        </p>

      </section>


      <section className="explore-section">

        <div className="section-top">
          <div>
            <span className="section-label">
              EXPLORE
            </span>

            <h2>Latest stories</h2>
          </div>

          <span className="article-count">
            {filteredBlogs.length} articles
          </span>
        </div>


        <div className="search-wrapper">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search stories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>


        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item ? "active-category" : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>


        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">

            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                isBookmarked={bookmarks.includes(blog.id)}
                onBookmark={toggleBookmark}
              />
            ))}

          </div>
        ) : (
          <div className="empty-state">
            <div>⌕</div>
            <h2>No stories found</h2>
            <p>
              Try another search term or category.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}

export default Home;