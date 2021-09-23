ymaps.ready(init);

function init() {
    const place = "Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54"

    ymaps.geocode(place, {results: 1 })
        .then(res => {
            let coord = res.geoObjects.get(0).geometry.getCoordinates();

            const myMap = new ymaps.Map("map", {
                center: coord,
                zoom: 17
            });

            // Создание геообъекта с типом точка (метка).
            const myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
                iconLayout: 'default#image',
                iconImageHref: './img/Placemark.svg',
                iconImageSize: [28, 40],
            });

            myMap.geoObjects.add(myPlacemark);
        })
}
