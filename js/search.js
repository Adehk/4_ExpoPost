const inputValue = window.location.search.substring(6);
const userId = location.search.substring(4);
const userContainer = document.querySelector(".user");
const loader = document.querySelector(".loader");
userContainer.style.display = "none";

fetch(`https://jsonplaceholder.typicode.com/users?name=${inputValue}`)
  .then((res) => res.json())
  .then((data) => renderUser(data));

fetch(`https://jsonplaceholder.typicode.com/posts?title=${inputValue}`)
  .then((res) => res.json())
  .then((data) => console.log(data));

const renderUser = (data) => {
  loader.style.display = "none";
  userContainer.style.display = "block";
  const card_container = document.querySelector(".card_container");
  data.length !== 0
    ? data.forEach((item) => card_container.append(createUser(item)))
    : (card_container.innerText = "Пользователь не найден");
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

// -------------------Поиск--------------------

const searchBtn = document.querySelector(".btn", "btn-outline-success");
const input = document.querySelector(".form-control", "me-2");

const search = (event) => {
  event.preventDefault();
  window.location.href =
    window.location.origin + `/pages/search.html?name=${input.value}`;
};

searchBtn.addEventListener("click", search);
