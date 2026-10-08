import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog({ onCreate }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Technology",
    image: "",
    excerpt: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.excerpt ||
      !form.content
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onCreate({
      ...form,
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readTime: "5 min read",
      likes: 0,
      image:
        form.image ||
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    });

    navigate("/");
  };

  return (
    <main className="form-page">

      <div className="form-heading">
        <span>CREATE</span>
        <h1>Write something worth reading.</h1>
        <p>
          Share your ideas with the Inkly community.
        </p>
      </div>


      <form
        className="blog-form"
        onSubmit={handleSubmit}
      >

        <label>
          Title
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter your article title"
          />
        </label>


        <div className="form-row">

          <label>
            Author
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>


          <label>
            Category
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Technology</option>
              <option>Design</option>
              <option>Programming</option>
              <option>Cloud</option>
              <option>Lifestyle</option>
            </select>
          </label>

        </div>


        <label>
          Image URL
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
          />
        </label>


        <label>
          Short Description
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Write a short description..."
          />
        </label>


        <label>
          Article Content
          <textarea
            className="large-textarea"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your article..."
          />
        </label>


        <button className="publish-btn" type="submit">
          Publish Article →
        </button>

      </form>

    </main>
  );
}

export default CreateBlog;