import React from "react";
import "./BlogsSection.css";

const blogs = [
  {
    id: 1,
    title: "What Makes an Authentic Employee Profile?",
    author: "Amanda Hugh",
    date: "23 Nov 2022",
    excerpt:
      "I'm totally unconvinced that two people can find a person they haven't known previously...",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=fashion-person-woman-733872.jpg&fm=jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Why Does It Matter to be Authentic Employee?",
    author: "Sofia Kent",
    date: "15 Nov 2022",
    excerpt:
      "I'm totally unconvinced that two people can find a person they haven't known previously...",
    image:
      "https://th.bing.com/th/id/OIP.VRQY7U-qaATOOm0Tias6swHaFj?w=2560&h=1920&rs=1&pid=ImgDetMain",
    link: "#",
  },
  {
    id: 3,
    title: "What Makes an Authentic Employee Profile?",
    author: "Jason Bone",
    date: "23 Sep 2022",
    excerpt:
      "I'm totally unconvinced that two people can find a person they haven't known previously...",
    image:
      "https://yt3.ggpht.com/a/AATXAJy_G7Jc1VQn67wm2xMk1ygQMBXr-Ii-SATvcQ=s900-c-k-c0xffffffff-no-rj-mo",
    link: "#",
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-date">{blog.date}, by {blog.author}</p>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-excerpt">{blog.excerpt}</p>
        <a href={blog.link} className="blog-link">Read Story →</a>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  return (
    <section id="blogs" className="blogs-section">
      <div className="container">
        <h2 className="section-title">
          What's new on <span className="highlight">Trustco.</span> ?
        </h2>
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="see-all">
          <a href="#" className="see-all-link">See All →</a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;