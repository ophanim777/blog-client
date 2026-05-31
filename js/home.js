const API_URL =
  "http://localhost:3000/api/posts";

async function loadPosts() {

  const response =
    await fetch(API_URL);

  const posts =
    await response.json();

  const container =
    document.getElementById("posts");

  posts.forEach(post => {

    container.innerHTML += `
      <div class="card">
        <h2>${post.title}</h2>

        <a href="post.html?id=${post.id}">
          Read More
        </a>
      </div>
    `;
  });
}

loadPosts();