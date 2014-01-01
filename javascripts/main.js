;(function(){

    for (var i = 100; i >= -100; i--) {
        $("#pay").append($("<option/>", {value: i, text: i}));
    }

    var getTip = function(val){
        return $("#tip").data("value");
    };
    var setTip = function(val){
        $("#tip").data("value", val);
        $("#tip").text(val);
    };

    $("#add3tip").click(function() { setTip(getTip() + 3); });
    $("#add1tip").click(function() { setTip(getTip() + 1); });
    $("#sub1tip").click(function() { setTip(getTip() - 1); });

    $("#pay").val(0);
    setTip(0);

})()
