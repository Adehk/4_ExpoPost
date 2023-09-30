const usersContainer = document.querySelector(".users");
const loader = document.querySelector(".loader");
usersContainer.style.display = "none";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => renderUsers(data));

const renderUsers = (data) => {
  loader.style.display = "none";
  usersContainer.style.display = "block";
  const cards_holder = document.querySelector(".cards-holder");
  data.forEach((item) => {
    cards_holder.append(createUser(item));
  });
};

const createUser = (item) => {
  const card = document.createElement("div");
  card.classList.add("card", "w-100");
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

{
  /* <div class="card w-100">
  <div class="card-body">
    <h5 class="card-name">Leanne Graham</h5>
    <p class="card-username">Bret</p>
    <p class="card-email">Sincere@april.biz</p>
    <p class="card-phone">1-770-736-8031 x56442</p>
    <p class="card-website">hildegard.org</p>
    <a href="#" class="btn btn-dark">Перейти на страницу пользователя</a>
  </div>
</div> */
}

// -------------------Поиск--------------------

const searchBtn = document.querySelector(".btn", "btn-outline-success");
const input = document.querySelector(".form-control", "me-2");

const search = (event) => {
  event.preventDefault();
  window.location.href =
    window.location.origin + `https://adehk.github.io/4_ExpoPost/pages/search.html?name=${input.value}`;
};

searchBtn.addEventListener("click", search);
