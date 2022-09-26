let data = JSON.parse(localStorage.getItem("ads"));


for(let i = 0; i < data.length; i++){
  var container = document.getElementById("fluid-container");
  
  var ddiv = document.createElement("div");
  ddiv.innerHTML = `
  <div class="card" style="width: 18rem;">
    <img src="${data[i].image}" alt="...">
    <div class="card-body">
    <h5 id="title" class="card-title">${data[i].adTitle}</h5>
    <p class="card-text">${data[i].description}</p>
    <p class="card-text"><b>${data[i].price}</b></p>
    <a href="http://127.0.0.1:5501/details.html/"  class="btn btn-primary">View Details</a>
  </div>
`;
container.appendChild(ddiv)

}