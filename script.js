function allCountry() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      countryList(data);
    });
}
allCountry();
// Jhankar has used forEach instead of for loop
// function countryList(country)

countryList = country =>{
  const allCountries = document.getElementById("all-country");
  for (let i = 0; i < country.length; i++) {
    const singleCountry = country[i];
    const countryDiv = document.createElement("div");
    countryDiv.className = 'country-style';
    // const h3 = document.createElement("h3");
    // h3.innerText = singleCountry.name;
    // countryDiv.appendChild(h3);
    // // console.log(h3.innerText);

    // const p = document.createElement("p");
    // p.innerText = singleCountry.capital;
    // countryDiv.appendChild(p);
    // // console.log(p.innerText )

    const countryInfo = `
        <h3 class="cName">${singleCountry.name}</h3>
        <p>${singleCountry.capital}</p>
        <p>${singleCountry.population}</p>
        <button>Show details</button>
    `;
    countryDiv.innerHTML = countryInfo;
    allCountries.appendChild(countryDiv);
  }
}
