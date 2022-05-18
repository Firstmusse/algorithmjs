let arr = [];
let counter = 1;
let news = document.getElementById("news");
let inpu = document.getElementById("txtWord");

// https://restcountries.com/v2/all
// "https://restcountries.com/v2/regionalbloc/eu"


function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}

function renderItems(items) {
  
  news.textContent = ''
      let itog = "";
      items.forEach((item,index) => {
        
        if(!matchSearch(item, inpu.value)) return false
        if (item.currencies)
          itog = `
          <tr>
          <td>${item.alpha2Code} [${index+1}]</td>
          <td>${item.name}</td>
          <td>${item.capital || "------------"}</td>
          <td>${Object.values(item.currencies[0])}</td>
          <td><img width=100px src="${item.flags.svg}"></td>
          <td>${item.population}</td>
          <td>${item.borders ?? "-----------------"}</td>
          <td>${item.timezones}</td>
          </tr>`;
        news.insertAdjacentHTML("beforeend", itog);
      });
}


function matchSearch(item, query) {
  return item.name.toLowerCase().includes(query.toLowerCase()) || item.capital?.toLowerCase().includes(query.toLowerCase()) || 
  item.alpha2Code.includes(query) || item.population <= Number(query)  ||
  item.timezones.includes(query) || Object.values(item.currencies?.[0]||{}).includes(query)
  || item.borders?.includes(query)
}

fetch("https://restcountries.com/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    arr = data;
    oninput = function () {
      document.getElementById("txtWord").innerText = inpu.value;  
      renderItems(arr)
    };
    renderItems(arr)
  });

  