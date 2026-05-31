const params =
  new URLSearchParams(
    window.location.search
  );

const id = params.get("id");

const API =
  `http://localhost:3000/api/posts/${id}`;

async function loadPost() {

  const response =
    await fetch(API);

  const post =
    await response.json();

  document.getElementById("post")
    .innerHTML = `
      <h1>${post.title}</h1>
      <p>${post.content}</p>
    `;

  const comments =
    document.getElementById("comments");

  post.comments.forEach(comment => {

    comments.innerHTML += `
      <p>${comment.content}</p>
    `;
  });
}

loadPost();