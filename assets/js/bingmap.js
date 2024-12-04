/* Bing Maps */
document.getElementById("store-selector").addEventListener("change", function () {
    const storeSelector = document.getElementById("store-selector");
    const mapIframe = document.getElementById("map");
    const selectedValue = storeSelector.value;

    if (selectedValue) {
        const coordinates = selectedValue.split("~");
        const latitude = coordinates[0];
        const longitude = coordinates[1];

        /* Update location */ 
        const pinUrl = "https://upload.wikimedia.org/wikipedia/commons/4/42/Red_pin.svg";  /* URL red pin */
        mapIframe.src = `https://www.bing.com/maps/embed?h=400&w=800&cp=${latitude}~${longitude}&lvl=16&typ=d&sty=r&form=S00027&pp=${latitude}_${longitude}`;
    } else {
        alert("Select a store!");
    }
});
