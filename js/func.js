function hamburger() {
    var navig = document.getElementById('navig');
    var navigStyle = getComputedStyle(navig);
    var navDis = navigStyle.display;
    var navPos = navPosition();

    navig.style.top = navPos + "px";

    if (navDis == 'none') {
        navig.style.display = 'inline-block';
    } else {
        navig.style.display = 'none';
    }
}

function navPosition() {
    var myHeader = document.getElementById("myHeader");
    var headerStyle = getComputedStyle(myHeader);
    var navPos = parseFloat(headerStyle.height) + parseFloat(headerStyle.marginBottom);

    console.log(navPos);

    return navPos;
}

function addDescription(description, footer) {
    description.style.display = 'block';
    footer.style.display = 'block';
}

function removeDescription(description, footer) {
    description.style.display = 'none';
    footer.style.display = 'none';
}
