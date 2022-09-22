const adTitle = document.getElementById("ad-title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const form = document.getElementById("form");

let arr = [];

function createAdd() {
  function Ad(adTitle, description, price) {
    this.adTitle = adTitle;
    this.description = description;
    this.price = price;
  }

  arr.push(new Ad(adTitle.value, description.value, price.value));

  localStorage.setItem("ads", JSON.stringify(arr));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createAdd();
});
