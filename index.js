let arr = []
let news = document.getElementById("news")

fetch('https://www.breakingbadapi.com/api/quotes')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let item of data) {
       arr.push(item)  
    }

    let result = ''

    arr.forEach((item)=>{
        result = `
        <tr>
        <td>${item.quote_id}</td>
        <td>${item.quote}</td>
        <td>${item.author}</td>
        <td>${item.series}</td>
        </tr>`
        console.log(item.quote_id);
        news.insertAdjacentHTML('beforeend', result);
    })
    
});



