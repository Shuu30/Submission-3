function getglobalsnt(){

    const getDataSuzume = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const suzume = document.querySelector('.suzume-movie');
            suzume.innerHTML = results.suzumetojimari.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalsnt;