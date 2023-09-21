const userId = location.search.substring(4);

fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
  .then((res) => res.json())
  .then((data) => renderUser(data));

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((res) => res.json())
  .then((data) => renderPosts(data));

const renderUser = (data) => {
  data.forEach((item) => {
    const card_container = document.querySelector(".card_container");
    card_container.append(createUser(item));
  });
};

const createUser = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");
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

  return card;
};

{
  /* <div class="card">
  <div class="card-body">
    <h5 class="card-name">Leanne Graham</h5>
    <p class="card-username">Bret</p>
    <p class="card-email">Sincere@april.biz</p>
    <p class="card-phone">1-770-736-8031 x56442</p>
    <p class="card-website">hildegard.org</p>
  </div>
</div> */
}

const renderPosts = (data) => {
  const row = document.querySelector(".row");
  const count = document.querySelector(".count");
  count.innerText = `(${data.length})`;
  data.forEach((item) => {
    row.append(createPost(item));
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

{
  /* <div class="col">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */
}
