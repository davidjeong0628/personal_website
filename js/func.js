function hamburger() {
    var navig = document.getElementById('navig');
    var navigStyle = getComputedStyle(navig);
    var navDis = navigStyle.display;

    if (navDis == 'none') {
        navig.style.display = 'inline-block';
    } else {
        navig.style.display = 'none';
    }
}
