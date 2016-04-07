var devios = {
getPicture: function(success, failure){
    cordova.exec(success, failure, "devios", "openCamera", []);
}
};