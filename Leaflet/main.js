    // Inicializar mapa
    var map = L.map('map').setView([-12.0464, -77.0428], 6);

    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Tus puntos
    var puntos = [
        { nombre: "Meliponario 4 Hermanos", lat: -6.5865, long: -77.3721 },
        { nombre: "Meliponario El Ron", lat: -5.7511, long: -78.2505 },
        { nombre: "Meliponario de Cutervo", lat: -6.2342 , long: -78.6976}, 
        { nombre: "Meliponario Yantlo", lat: -5.9702, long: -77.0261},
        { nombre: "Mielosa", lat: -5.1155, long: -79.0050},
        { nombre: "Meliponario El Bosque", lat: -12.6590, long: -69.2151},
        { nombre: "Chaikuni", lat: -3.7421, long: -73.3628},
        { nombre: "Magaly Acosta", lat: -8.7939, long: -76.2008},
        { nombre: "BioKuka", lat: -8.4224, long: -74.7003},
        {nombre: "Meliponario Widi Da", lat: -12.6189, long: -69.1949},
        { nombre: "Maliponario Miel de Oro Jumpes", lat: -9.3303, long: -76.0383},
        { nombre: "Meliponario Juan Verdey", lat: -11.0534, long: -753404},
        {nombre: "Helga - Meliponario Bombus", lat: -10.1048, long: -75.5409},
        { nombre: "Clemencia", lat: -12.6345, long: -69.2116},
        { nombre: "Franklin Segura", lat: -5.9611, long: -77.2967},
        { nombre: "Meliponario Los Nogales", lat: -10.7550, long: -75.4869},
        { nombre: "Meliponario Titania", lat: -5.9812, long: -77.2030},
        { nombre: "Meliponario Aldea de las Abejas - CREA", lat: -3.8836, long: -73.3513},
        { nombre: "Bee Queen Coin", lat: -3.8421, long: -73.3327},
        { nombre: "Alejandro - Camino Verde", lat: -12.8339, long: -69.4451},
        { nombre: "Coco Moreno", lat: -6.5698, long: -76.1324},
        { nombre: "Tajimat", lat: -5.8321, long: -77.3034},
        { nombre: "Aldea de la Abeja", lat: -3.8547, long: -73.4012},

    ];

    // Agregar marcadores
    puntos.forEach(function(p) {
        L.marker([p.lat, p.long]).addTo(map)
            .bindPopup(p.nombre);
    });