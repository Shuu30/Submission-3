function getglobalyc(){

    const getDataYuru = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const yuru = document.querySelector('.yuru-movie');
            yuru.innerHTML = results.yurucamp.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalyc;