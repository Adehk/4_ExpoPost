const inputValue = window.location.search.substring(6);
const userContainer = document.querySelector(".user");
const loader = document.querySelector(".loader");
userContainer.style.display = "none";
const postContainer = document.querySelector(".posts");
postContainer.style.display = "none";

fetch(`https://jsonplaceholder.typicode.com/users?name=${inputValue}`)
  .then((res) => res.json())
  .then((data) => renderUser(data));

fetch(`https://jsonplaceholder.typicode.com/posts?title=${inputValue}`)
  .then((res) => res.json())
  .then((data) => renderPost(data));

const renderUser = (data) => {
  loader.style.display = "none";
  userContainer.style.display = "block";
  const card_container = document.querySelector(".card_container");
  data.length !== 0
    ? data.forEach((item) => card_container.append(createUser(item)))
    : (card_container.innerText = "Пользователь/Пост не найден");
};

const createUser = (item) => {
  const card = document.createElement("div");
  card.classList.add("card", "border", "w-100");
  card.dataset.id = item.id;

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");
  card.append(card_body);

  const card_name = document.createElement("h5");
  card_name.classList.add("card-name");
  card_body.append(card_name);
  card_name.innerText = item.name;

  const card_username = document.createElement("p");
  card_username.classList.add("card-username");
  card_body.append(card_username);
  card_username.innerText = item.username;

  const card_email = document.createElement("p");
  card_email.classList.add("card-email");
  card_body.append(card_email);
  card_email.innerText = item.email;

  const card_phone = document.createElement("p");
  card_phone.classList.add("card-phone");
  card_body.append(card_phone);
  card_phone.innerText = item.phone;

  const card_website = document.createElement("p");
  card_website.classList.add("card-website");
  card_body.append(card_website);
  card_website.innerText = item.website;

  card_body.innerHTML += `<a href="user.html?id=${item.id}&userId=${item.userId}" class="btn btn-dark">Перейти на страницу пользователя</a>`;

  return card;
};

const renderPost = (data) => {
  loader.style.display = "none";
  postContainer.style.display = "block";
  data.forEach((item) => {
    postContainer.append(createPost(item));
  });
};

const createPost = (item) => {
  const col = document.createElement("div");
  col.classList.add("col");
  col.dataset.id = item.id;
  col.dataset.user_id = item.userId;
  const card = document.createElement("div");
  card.classList.add("card");

  col.append(card);

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");

  card.append(card_body);

  const card_title = document.createElement("h5");
  card_title.classList.add("card-title");
  card_title.innerText =
    item.title.length > 25 ? item.title.substring(0, 25) + "..." : item.title;

  card_body.append(card_title);

  const card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.innerText =
    item.body.length > 115 ? item.body.substring(0, 115) + "..." : item.body;

  card_body.append(card_text);

  card_body.innerHTML += `<a href="post.html?postId=${item.id}" class="btn btn-dark">Открыть пост</a>`;

  return col;
};

// -------------------Поиск--------------------

const searchBtn = document.querySelector(".btn", "btn-outline-success");
const input = document.querySelector(".form-control", "me-2");

const search = (event) => {
  event.preventDefault();
  window.location.href =
    window.location.origin + `https://adehk.github.io/4_ExpoPost/pages/search.html?name=${input.value}`;
};

searchBtn.addEventListener("click", search);
