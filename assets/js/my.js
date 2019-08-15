var content = document.getElementByClassName('event-cards');

function moveDown () {
    var top = parseInt(content.style.marginTop); // get the top margin
                                                 // we'll be using this to
                                                 // push the div down

    if (!top) {
        top = 0; // if the margin is undefined, default it to zero
    }

    top += 20; // add 20 pixels to the current margin

    content.style.marginTop = top + 'px'; // push div down

    if (top < 200) {
        // If it's not yet 200 pixels then call this function
        // again in another 100 milliseconds (100 ms gives us
        // roughly 10 fps which should be good enough):
        setTimeout(moveDown,100);
    }
}

function collapseContent () {
    var height = parseInt(content.style.height);

    if (!height) {
        height = content.offsetHeight; // if height attribute is undefined then
                                       // use the actual height of the div
    }

    height -= 10; // reduce height 10 pixels at a time

    if (height < 0) height = 0;

    content.style.height = height + 'px';

    if (height > 0) {
        // keep doing this until height is zero:
        setTimeout(collapseContent,100);
    }
}
