function getglobalbsd(){

    const getDataDogs = fetch('https://gowatch.p.rapidapi.com/lookup/title/tmdb_id')
        .then(results => results.json())
        .then(results => {
            const bungou = document.querySelector('.bsd-movie');
            bungou.innerHTML = results.bungoudogs.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalbsd;