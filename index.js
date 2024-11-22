const btnEl = document.querySelector('.btn');
const animeContainer = document.querySelector('.anime-container');
const animeImg = document.querySelector('.anime-img');
const animeName = document.querySelector('.anime-name');

async function getAnimal() {
  try {
    btnEl.disabled = true;
    animeImg.src = '';
    animeName.innerText = 'Loading...';
    animeImg.src = 'rolling.svg';
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    animeContainer.style.display = 'block';
    animeImg.src = await data[0].url;
    animeName.innerText = data[0].id + "cat";

    btnEl.disabled = false;

  } catch (error) {
    console.log('error');
    animeImg.src = 'rolling.svg';
    animeName.innerText = 'Try again';
    btnEl.disabled = false;
  }

}
btnEl.addEventListener('click', getAnimal);