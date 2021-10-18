
document.body.innerHTML=
`<section class="container">
<div id="flags" class="row"></div>
</section>`

fetch("https://restcountries.com/v3.1/all")
.then(data=>data.json())
.then(countries=>{
    for(key in countries){
        const flags = document.querySelector("#flags");
        flags.innerHTML+=
      `<main class="col-sm-12 col-md-6 col-lg-4 col-xxl-3 space " >
            <div class="flag-container">
                <img src= ${countries[key].flags.svg} alt="countries-flags"class="flag"/>
            
        <div class="details">
               <h3>${countries[key].name.common}</h3>
               <P><b>Population :</b> ${countries[key].population}</p>
               <P><b>Region :</b> ${countries[key].region}</p>
               <P><b>Capital :</b> ${countries[key].capital}</p>
         </div>
     </div>
</main> `
    }
})