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
    moving: '',
    up: function(e) { Move(Zero, {'up': one_move}); window_touch.moving = 'up'; },
    up_holded: function(e) { 
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'up')
                Move(Zero, {'up': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50); },
    up_end: function(e) { window_touch.moving = ''; },
    down: function(e) { Move(Zero, {'down': one_move}); window_touch.moving = 'down'; },
    down_holded: function(e) {         
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'down')
                Move(Zero, {'down': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50); },
    down_end: function(e) { window_touch.moving = ''; },
    left: function(e) { Move(Zero, {'left': one_move}); },
    right: function(e) { Move(Zero, {'right': one_move}); },
    right_up: function(e) { Move(Zero, {'up': one_move, 'right': one_move}); },
    right_down: function(e) { Move(Zero, {'down': one_move, 'right': one_move}); },
    left_up: function(e) { Move(Zero, {'up': one_move, 'left': one_move}); },
    left_down: function(e) { Move(Zero, {'down': one_move, 'left': one_move}); },
    center: function(e) { Zero.object.text(parseInt(Zero.object.text()) + 1); }
}

addEventListener ('touchend', function (event) { window_touch.moving = ''; }, false);