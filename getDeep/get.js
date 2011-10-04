(function(global){
    var get = function(path){
        if(!path){
            return;
        }
        var obj = this.obj;
        var parts = path.split('.');
        for(var i = 0, l = parts.length; obj && i != l; i++){
            obj = obj[parts[i]];
        }
        return obj;
    };
    global._ = function(obj){
        return {
            get : get,
            obj : obj
        }
    };
})(this);