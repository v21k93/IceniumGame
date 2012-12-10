var one_move = 5;
var Size = {
    b_width: '',
    b_height: '',
    
    initialize: function() {
        Size.b_width = window.innerWidth;
        $(".wrapper").css('width', Size.b_width);
        Size.b_height = window.innerHeight;
        $(".wrapper").css('height', Size.b_height + 1);
        
        $("#left_up_button, #up_button, #right_up_button, #left_button, #center_button, #right_button, #left_down_button, #down_button, #right_down_button").css('width', parseFloat(Size.b_width / 3));
        $("#left_up_button, #up_button, #right_up_button, #left_button, #center_button, #right_button, #left_down_button, #down_button, #right_down_button").css('height', parseFloat(Size.b_height / 3));
        
        $("#up_button").css('left', parseFloat(Size.b_width / 3));
        
        $("#right_up_button").css('left', parseFloat(2 * Size.b_width / 3));
        
        $("#left_button").css('top', parseFloat(Size.b_height / 3));
        
        $("#center_button").css('top', parseFloat(Size.b_height / 3));
        $("#center_button").css('left', parseFloat(Size.b_width / 3));
        
        $("#right_button").css('top', parseFloat(Size.b_height / 3));
        $("#right_button").css('left', parseFloat(2 * Size.b_width / 3));
        
        $("#left_down_button").css('top', parseFloat(2 * Size.b_height / 3));
        
        $("#down_button").css('left', parseFloat(Size.b_width / 3));
        $("#down_button").css('top', parseFloat(2 * Size.b_height / 3));
        
        $("#right_down_button").css('left', parseFloat(2 * Size.b_width / 3));
        $("#right_down_button").css('top', parseFloat(2 * Size.b_height / 3));
    },
};
var Zero;
function Element (element_name, pos_left, pos_top, pos_z) {};
function Move (object, keyval) {};