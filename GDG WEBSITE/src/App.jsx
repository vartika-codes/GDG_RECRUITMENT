import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import ManageBlogs from "./pages/ManageBlogs";
import Bookmarks from "./pages/Bookmarks";

import { initialBlogs } from "./data/blogs";

function App() {
  const [blogs, setBlogs] = useState(initialBlogs);

  const [bookmarks, setBookmarks] = useState([]);

  const [darkMode, setDarkMode] = useState(false);


  const createBlog = (newBlog) => {
    setBlogs((currentBlogs) => [
      newBlog,
      ...currentBlogs,
    ]);
  };


  const deleteBlog = (id) => {
    setBlogs((currentBlogs) =>
      currentBlogs.filter(
        (blog) => blog.id !== id
      )
    );

    setBookmarks((currentBookmarks) =>
      currentBookmarks.filter(
        (bookmarkId) => bookmarkId !== id
      )
    );
  };


  const toggleBookmark = (id) => {
    setBookmarks((currentBookmarks) => {
      if (currentBookmarks.includes(id)) {
        return currentBookmarks.filter(
          (bookmarkId) => bookmarkId !== id
        );
      }

      return [...currentBookmarks, id];
    });
  };


  const likeBlog = (id) => {
    setBlogs((currentBlogs) =>
      currentBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              likes: blog.likes + 1,
            }
          : blog
      )
    );
  };


  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
            />
          }
        />

        <Route
          path="/blog/:id"
          element={
            <BlogDetails
              blogs={blogs}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              likeBlog={likeBlog}
            />
          }
        />

        <Route
          path="/create"
          element={
            <CreateBlog
              onCreate={createBlog}
            />
          }
        />

        <Route
          path="/manage"
          element={
            <ManageBlogs
              blogs={blogs}
              onDelete={deleteBlog}
            />
          }
        />

        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              blogs={blogs}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
            />
          }
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;