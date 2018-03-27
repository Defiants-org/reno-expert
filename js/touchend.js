$("button").on("touchstart", function(){
    $(this).removeClass(".button.white");
});
$("button").on("touchend", function(){
    $(this).addClass(".button.white");
});
