document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    Main();
}

function Main() {
    Zero = new Element('pointer');
    Size.initialize();
    Move(Zero, { 'right': (Size.b_width - Zero.width) / 2, 'down': (Size.b_height - Zero.height) / 2 });
}
$(window).resize(function() {
    Size.initialize();
}); 
window.window_touch = {
    move_up: false,
    up: function(e) { Move(Zero, {'up': one_move}); },
    down: function(e) { Move(Zero, {'down': one_move}); },
    left: function(e) { Move(Zero, {'left': one_move}); },
    right: function(e) { Move(Zero, {'right': one_move}); },
    right_up: function(e) { Move(Zero, {'up': one_move, 'right': one_move}); },
    right_down: function(e) { Move(Zero, {'down': one_move, 'right': one_move}); },
    left_up: function(e) { Move(Zero, {'up': one_move, 'left': one_move}); },
    left_down: function(e) { Move(Zero, {'down': one_move, 'left': one_move}); },
    center: function(e) { Zero.object.text(++parseInt(Zero.object.text()) + 1); }
}