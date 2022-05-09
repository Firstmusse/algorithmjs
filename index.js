let arr = []
let counter = 1;
let news = document.getElementById("news")
fetch('https://restcountries.com/v2/all')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let item of data) {
       arr.push(item)  
    }
    
    // console.log(arr);
        
    let result = ''
    // item.currencies[0].code
    
    arr.forEach((item)=>{
        if(item.currencies)

        result = `
        <tr>
        <td>${item.alpha2Code} [${counter++}]</td>
        <td>${item.name}</td>
        <td>${item.capital}</td>
        <td>${Object.values(item.currencies[0])}</td>
        <td><img width=100px src="${item.flags.svg}"></td>
        <td>${item.population}</td>
        <td>${item.borders ? item.borders : '-----------------'}</td>
        <td>${item.timezones}</td>
        </tr>`
          
    
        news.insertAdjacentHTML('beforeend', result);
    })
    
    
});