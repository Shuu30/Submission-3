function getglobalop(){

    const getDataOp = fetch('https://gowatch.p.rapidapi.com/lookup/title/tmdb_id')
        .then(results => results.json())
        .then(results => {
            const op = document.querySelector('.one-movie');
            op.innerHTML = results.onepiece.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalop;