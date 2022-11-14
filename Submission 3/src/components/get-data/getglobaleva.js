function getglobaleva(){

    const getDatEva = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const eva = document.querySelector('.evangelion-movie');
            eva.innerHTML = results.evangelion.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobaleva;