$(document).ready(function(){
    $("a").mouseenter(function(){
        $(this).css("color", "green")
    })
    $("a").mouseout(function(){
        $(this).css("color", "black")
    })
    
});