let data = JSON.parse(localStorage.getItem("ads"));
 
for(let i = 0; i < data.length; i++){
  var container = document.getElementById("fluid-container");

  var ddiv = document.createElement("div");
  ddiv.innerHTML = `
  <div class="card" style="width: 18rem;">
<img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="...">
<div class="card-body">
  <h5  id="title" class="card-title">${data[i].adTitle}</h5>
  <p class="card-text">${data[i].description}</p>
  <p class="card-text"><b>${data[i].price}</b></p>

  <a href="#" class="btn btn-primary">View Details</a>
</div>
</div>
`;
container.appendChild(ddiv)

}