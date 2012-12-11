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
    
    left: function(e) { Move(Zero, {'left': one_move}); window_touch.moving = 'left';},
    left_holded: function(e) { 
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'left')
                Move(Zero, {'left': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50);  },
    left_end: function(e) { window_touch.moving = ''; },
    
    right: function(e) { Move(Zero, {'right': one_move}); window_touch.moving = 'right';},
    right_holded: function(e) { 
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'right')
                Move(Zero, {'right': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50);  },
    right_end: function(e) { window_touch.moving = ''; },
    
    right_up: function(e) { Move(Zero, {'up': one_move, 'right': one_move}); window_touch.moving = 'up_right';},
    right_up_holded: function(e) { 
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'up_right')
                Move(Zero, {'up': one_move, 'right': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50);  },
    right_up_end: function(e) { window_touch.moving = ''; },
    
    right_down: function(e) { Move(Zero, {'down': one_move, 'right': one_move}); window_touch.moving = 'right_down';},
    right_down_holded: function(e) { 
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'right_down')
                Move(Zero, {'down': one_move, 'right': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50);  },
    right_down_end: function(e) { window_touch.moving = ''; },
    
    left_up: function(e) { Move(Zero, {'up': one_move, 'left': one_move}); window_touch.moving = 'left_up';},
    left_up_holded: function(e) { 
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'left_up')
                Move(Zero, {'up': one_move, 'left': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50);  },
    left_up_end: function(e) { window_touch.moving = ''; },
    
    left_down: function(e) { Move(Zero, {'down': one_move, 'left': one_move}); window_touch.moving = 'left_down';},
    left_down_holded: function(e) { 
        var refreshIntervalId = setInterval(function(){
            if(window_touch.moving == 'left_down')
                Move(Zero, {'down': one_move, 'left': one_move});
            else
                clearInterval(refreshIntervalId);
        }, 50);  },
    left_down_end: function(e) { window_touch.moving = ''; },
   
    center: function(e) { Zero.object.text(parseInt(Zero.object.text()) + 1); }
}

addEventListener ('touchend', function (event) { window_touch.moving = ''; }, false);