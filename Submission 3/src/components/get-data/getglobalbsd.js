function getglobalbsd(){

    const getDataDogs = fetch('https://covid19.mathdro.id/api')
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
