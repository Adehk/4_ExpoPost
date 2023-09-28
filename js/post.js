const postId = window.location.search.substring(8);
const containerComments = document.querySelector(".comments");
const containerPosts = document.querySelector(".posts");
const loader = document.querySelector(".loader");
containerComments.style.display = "none";
containerPosts.style.display = "none";

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((res) => res.json())
  .then((data) => renderPost(data));

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  .then((res) => res.json())
  .then((data) => renderComments(data));

const renderPost = (data) => {
  loader.style.display = "none";
  containerPosts.style.display = "block";
  containerPosts.append(createPost(data));
};

const createPost = (data) => {
  const col = document.createElement("div");
  col.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card");

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");

  const card_title = document.createElement("h5");
  card_title.classList.add("card-title");
  card_title.innerText = data.title;

  const card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.innerText = data.body;

  card_body.append(card_title, card_text);

  card.append(card_body);

  col.append(card);

  return col;
};

const renderComments = (data) => {
  containerComments.style.display = "block";
  const count = document.querySelector(".count");
  count.innerText = "(" + data.length + ")";
  console.log(data);
  data.forEach((item) => containerComments.append(createComment(item)));
};

const createComment = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const card_header = document.createElement("div");
  card_header.classList.add("card-header");
  card_header.innerText = data.email;

  card.append(card_header);

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");

  const card_title = document.createElement("h5");
  card_title.classList.add("card-title");
  card_title.innerText = data.name;

  const card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.innerText = data.body;
  card_header.classList.add("card-header");

  card_body.append(card_title, card_text);
  card.append(card_body);

  return card;
};

// -------------------Поиск--------------------

const searchBtn = document.querySelector(".btn", "btn-outline-success");
const input = document.querySelector(".form-control", "me-2");

const search = (event) => {
  event.preventDefault();
  window.location.href =
    window.location.origin + `/pages/search.html?name=${input.value}`;
};

searchBtn.addEventListener("click", search);
