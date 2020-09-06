// Mobile menu control

var menuContainer = document.getElementById( 'navigation' );
var hamburgerButton = menuContainer.getElementsByTagName( 'button' )[ 0 ];

hamburgerButton.addEventListener( 'click', changeToggle );

function changeToggle(){
    if ( ! menuContainer.classList.contains('toggled') ) {
        menuContainer.classList.add( 'toggled' );
    } else {
        menuContainer.classList.remove( 'toggled' );
    }
}

// Listen all clicks on the menu and close mobile menu after clicking .menu-item

menuContainer.addEventListener('click', changeToggleByClick );

function changeToggleByClick(event) {

    var clickedElem = event.target;

    if (!event.target.closest('.menu-item')) return;
    menuContainer.classList.remove( 'toggled' );
}