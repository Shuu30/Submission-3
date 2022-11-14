function getglobaljjs(){

    const getDataJujutsu = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const jujutsu = document.querySelector('.jujutsu-movie');
            jujutsu.innerHTML = results.jujutsukaisen.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobaljjs;