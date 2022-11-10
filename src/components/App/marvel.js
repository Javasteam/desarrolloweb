import React from "react";

export function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}:${information[1]}`)
    .join("\n");
  window.location.href = "./marvel";
}

export function Marvel() {
  return (
    <div>
      <h3 class="font-link text-center mt-5">Hall of Superheroes</h3>
    </div>
  );
}

//End Point + ts=1 + &apikey=publica + &hash=md5(generar=1+publica+privada)

const marvel = {
  render: () => {
    const urlAPI =
      "http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=895485865867e3710c10d471760b28e1&hash=e06376e56bfe100afd7e202db46e6fae";
    const container = document.getElementById("datos");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
          <div class="col">
          <div class="card">
              <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="card-img-top" alt="${hero.name}"/> 
            <div class="card-body>    
              <a class="text-link card-title" href= ${urlHero} target="_blank">${hero.name}</a>
                <p class="text-link card-text">${hero.description}</p>
             </div>  
                </div>
              </div>`;
        }

        container.innerHTML = contentHTML;
      });
  },
};
marvel.render();
