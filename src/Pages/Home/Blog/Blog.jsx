import { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40naiemjoy1"
    )
      .then((response) => response.json()) // parse as JSON
      .then((data) => {
        setBlog(data.items); // 'items' contains the blog posts
      })
      .catch((error) => console.error("Error fetching:", error));
  }, []);

  console.log("blog items", blog);

  return (
    <div>
      {blog.length > 0 &&
        blog.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.pubDate}</p>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Blog;
