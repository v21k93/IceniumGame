function Element (element_name, pos_left, pos_top, pos_z) {
    this.object = $("#" + element_name);
    this.left = (pos_left) ? pos_left : 0;
    this.top = (pos_top) ? pos_top : 0;
    this.z = (pos_z) ? pos_z : 0;
    this.width = this.object.width();
    this.height = this.object.height();
    this.change = function(key, value) {
        if(!key || !value)
            return;
        
        switch(key)
        {
            case 'object':
                this.object = $("#" + value);
                break;
            case 'left':
                this.left = parseFloat(value);
                this.object.css('left', this.left + 'px');
                break;
            case 'top':
                this.top = parseFloat(value);
                this.object.css('top', this.top + 'px');
                break;
            case 'z':
                this.z = parseFloat(value);
                break;
            case 'width':
                this.width = parseFloat(value);
                break;
            case 'height':
                this.height = parseFloat(value);
                break;
            default:
                return;
        }  
    };
}