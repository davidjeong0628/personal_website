/*
* This file contains functions pertaining to phone-size screens.
*/



/*
* Displays the navigation if it was not displayed. Hides it if it was displayed.
* Calls on navPosition() to place the navigation right below the header.
*/
function displayNavigation() {
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

/*
* Calculates the total height of the header to help determine the navigation's position.
* Returns the calculated value.
*/
function navPosition() {
    var myHeader = document.getElementById("myHeader");
    var headerStyle = getComputedStyle(myHeader);
    var navPos = parseFloat(headerStyle.height) + parseFloat(headerStyle.marginBottom);

    return navPos;
}

/*
* Hides the navigation.
*/
function removeNav() {
    var navig = document.getElementById('navig');

    navig.style.display = 'none';
}
