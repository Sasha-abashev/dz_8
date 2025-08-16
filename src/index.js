const bookmarkInput = document.getElementById("bookmarkInput");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
const bookmarkList = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks() {
  bookmarkList.innerHTML = "";
  bookmarks.forEach((url, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = url;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => {
      bookmarks.splice(index, 1);
      saveBookmarks();
      renderBookmarks();
    };

    li.appendChild(link);
    li.appendChild(deleteBtn);
    bookmarkList.appendChild(li);
  });
}

addBookmarkBtn.addEventListener("click", () => {
  const url = bookmarkInput.value.trim();
  if (url) {
    bookmarks.push(url);
    saveBookmarks();
    renderBookmarks();
    bookmarkInput.value = "";
  }
});

renderBookmarks();







const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

window.addEventListener("load", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  if (savedUsername) usernameInput.value = savedUsername;
  if (savedPassword) passwordInput.value = savedPassword;
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  alert("Дані збережено!");
});






import template from "./template.hbs";

const products = [
  { name: "Ноутбук", price: "$1200", description: "Потужний і швидкий" },
  { name: "Смартфон", price: "$600", description: "З гарною камерою" },
  { name: "Навушники", price: "$150", description: "Шумозаглушення" },
];

const container = document.querySelector(".product-container");
const searchInput = document.getElementById("search");

function render(items) {
  container.innerHTML = template({ products: items });
}

render(products);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  render(filtered);
});

