import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPostInfo, setSelectedPostInfo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const showPost = (id) => {
    setSelectedPostInfo(posts[id - 1]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="column-1">
          <h2>Post List</h2>
          {posts.length !== 0 &&
            posts.map((post) => {
              return (
                <div
                  className="column-1__list"
                  key={post.id}
                  onClick={() => showPost(post.id)}
                >
                  {post.title}
                </div>
              );
            })}
        </div>
        <div className="column-2">
          <h2>Post Details</h2>
          {selectedPostInfo ? (
            <>
              <div style={{ marginBottom: "1rem" }}>
                <strong>Title:</strong> {selectedPostInfo.title}
              </div>
              <div>
                <strong>Body:</strong> {selectedPostInfo.body}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Posts;
