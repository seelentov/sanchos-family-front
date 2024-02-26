export default () => {
  let center = [55.162685, 61.299227]

  function init() {
    let map = new ymaps.Map('map', {
      center: center,
      zoom: 17
    })

    let placemark = new ymaps.Placemark([55.163085, 61.299227], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/logo-map.svg',
      iconImageSize: [178, 96],
      iconImageOffset: [-19, -44]
    })

    map.controls.remove('geolocationControl') // удаляем геолокацию
    map.controls.remove('searchControl') // удаляем поиск
    map.controls.remove('trafficControl') // удаляем контроль трафика

    map.controls.remove('fullscreenControl') // удаляем контроль трафика
    map.controls.remove('typeSelector') // удаляем тип

    map.controls.remove('zoomControl') // удаляем контрол зуммирования
    map.controls.remove('rulerControl') // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)


    map.geoObjects.add(placemark)


    const layer = new YMapDefaultSchemeLayer({
      customization: [
      ]
    });
    map.addChild(layer);

  }

  ymaps.ready(init)
}