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

    var init = function() {
        $("#pay").val(0);
        setTip(0);
    }

    $("#add3tip").click(function(e){ setTip(getTip() + 3); });
    $("#add1tip").click(function(e){ setTip(getTip() + 1); });
    $("#sub1tip").click(function(e){ setTip(getTip() - 1); });

    $("#form").submit(function(e) {
        e.preventDefault();

        var point = $("#pay").val() | 0;
        var tip = getTip();
        $("#result-tbody").append(
            [point, tip, point + tip * 5].map(function(text){
                return $("<td/>", { text: text });
            }).reduce(function(tr, td){
                return tr.append(td);
            }, $("<tr/>"))
        );

        init();
    });

    init();

})()
