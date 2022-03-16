const holder = document.querySelector('.flex');
const loader = document.querySelector('.loading');

function getData(){
    fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
    .then(response => response.json())
    .then(data => {
        const test = data.result;
        loader.remove();
        console.log(test);
        test.forEach((item, index) => {
            const link = item.quicktext.split(' - ');
            const linkReal = link[3].split(' ');
            holder.innerHTML += `
            <a href="${linkReal[0]}"><div class="item">
                <h1>${item.name}</h1>
                <h2>${item.date_str}</h2>
                <h3>${item.pad.location.country}</h3>
                <p class="desc">${item.launch_description}</p>
                <hr>
                <p class="ja">${item.provider.name} • ${Math.floor(item.weather_temp)}°F • ${Math.floor((item.weather_temp-32) / 1.8)}°C</p>
            </div></a>
            `
        });
    })
};
getData();