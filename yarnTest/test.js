/**
 * Created by tlhagh on 2017/9/2.
 */


function handleBtnClick(event) {
    // Do something
}

function handleBtnKeyPress(event) {
    // Check to see if space or enter were pressed
    if (event.keyCode === 32 || event.keyCode === 13) {
        // Prevent the default action to stop scrolling when space is pressed
        event.preventDefault();

        // Do something

    }
}