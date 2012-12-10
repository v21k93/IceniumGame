function Move (object, keyval) {
    if(keyval.hasOwnProperty('left'))
        if(object.left - keyval['left'] >= 0)
            object.change('left', object.left - keyval['left']);
    if(keyval.hasOwnProperty('up'))
        if(object.top - keyval['up'] >= 0)
            object.change('top', object.top - keyval['up']);
    if(keyval.hasOwnProperty('right'))
        if(object.left + keyval['right'] + object.width <= Size.b_width)
            object.change('left', object.left + keyval['right']);
    if(keyval.hasOwnProperty('down'))
        if(object.top + keyval['down'] + object.height <= Size.b_height)
            object.change('top', object.top + keyval['down']);
}