$("li").click(function(){
    $(this).toggleClass("completed");
    
});

$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    
    event.stopPropagation();
});


/*
$("ul").click(function(){
    alert("clicked on ul");
    event.stopPropagation();
});

$("#container").click(function(){
    alert("clicked on a container div");
    event.stopPropagation();
});

$("body").click(function(){
    alert("Clicked a body");
    event.stopPropagation();
});*/