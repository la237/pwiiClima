document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    console.log(input);
    if (input !== '') {
        showWarning('Carregando...'); 
           let url= 'https://api.openweathermap.org/data/2.5/weather?q= ${ encodeURI(input) }&appid=5447292237d4d1b0aaa6be6190db98ef&units=metric&lang=pt_br'; 


        let results = await fetch(url);
        let json = await results.json();
        console.log(json);


    }else {
        
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}
