document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([55.6761, 12.5683], 14);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define a custom icon
    var customIcon = L.icon({
        iconUrl: 'icons/icon-pin-blue.svg', // path to your custom marker image
        iconSize: [32, 32], // size of the icon [width, height]
        iconAnchor: [16, 32], // point of the icon which will correspond to marker's location (tip of the marker)
        popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
    });

    // Define an array of places with coordinates, names, and additional info
    var places = [
        { name: 'OpéraSport', lat: 55.678117, lng: 12.582189, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>OpéraSport</h3>
                    <p>5 August<br>14:00<br>Admiralgade 26</p>
                </div>
                <button class="learn-more-button">Learn More</button>
            </div>
        `},
        { name: 'Sól Hansdóttir', lat: 55.682732, lng: 12.589492, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>Sól Hansdóttir</h3>
                    <p>5 August<br>14:30<br>Royal Danish Academy of Fine Arts</p>
                </div>
                <button class="learn-more-button">Learn More</button>
            </div>
        `},
        { name: 'Forza Collective', lat: 55.669986, lng: 12.565674, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>Forza Collective</h3>
                    <p>5 August<br>15:00<br>Carlsberg Byen</p>
                </div>
                <button class="learn-more-button">Learn More</button>
            </div>
        `},
        { name: 'Stem', lat: 55.67469, lng: 12.60059, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>Stem</h3>
                    <p>5 August<br>16:30<br>Den Grå Hal</p>
                </div>
                <button class="learn-more-button">Learn More</button>
            </div>
        `},
        { name: 'La Bagatelle', lat: 55.671260, lng: 12.564499, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>La Bagatelle</h3>
                    <p>6 August<br>10:30<br>H15</p>
                </div>
                <button class="learn-more-button">Learn More</button>
            </div>
        `},
        { name: '(di)vision', lat: 55.666580, lng: 12.549960, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>(di)vision</h3>
                    <p>6 August<br>19:00<br>Lokomotivværkstedet</p>
                </div>
                <button class="learn-more-button">Learn More</button>
            </div>
        `},
        { name: 'Henrik Vibskov', lat: 55.676774, lng: 12.568337, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>Henrik Vibskov</h3>
                    <p>7 August<br>18:00<br>Copenhagen Fashion Hub</p>
                </div>
                <button class="learn-more-button">Learn More</button>
            </div>
        `},
        { name: 'Han Kjobenhavn', lat: 55.67469, lng: 12.60059, popupContent: `
            <div class="custom-popup">
                <div class="popup-header">
                    <h3>Han Kjobenhavn</h3>
                    <p>8 August<br>17:00<br>Den Grå Hal</p>
                </div>
                <a href="events/event-han-kjobenavn.html" style="text-decoration: none;">
                <button class="learn-more-button">Learn More</button>
                </a>
            </div>
        `}
    ];

    // Add markers to the map for each place
    places.forEach(function(place) {
        var marker = L.marker([place.lat, place.lng], { icon: customIcon }).addTo(map);
        if (place.popupContent) {
            marker.bindPopup(place.popupContent);
        } else {
            marker.bindPopup(place.name);
        }
    });

// Add "You are here" marker for user's current location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Define a custom icon for the user's location
        var userIcon = L.icon({
            iconUrl: 'ICONS/icons-pin-red.svg', // Path to your custom "You are here" marker icon
            iconSize: [32, 32], // size of the icon [width, height]
            iconAnchor: [16, 32], // point of the icon which will correspond to marker's location (tip of the marker)
            popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
        });

        // Add the "You are here" marker
        var userMarker = L.marker([lat, lon], { icon: userIcon }).addTo(map);
        userMarker.bindPopup("<b>You are here!</b>").openPopup();

        // Set map view to user's location
        map.setView([lat, lon], 14);
    }, function (error) {
        console.error("Geolocation not available or permission denied");
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}
});

//Go back function for navigation
function goBack() {
    window.history.back();
  }