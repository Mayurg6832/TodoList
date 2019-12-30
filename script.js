
$('ul').on("click","li",function(){
	$(this).toggleClass("completed")
});


$('input').on('keypress',function(event) {
    if(event.which == 13) {
        var value=$('input').val();
        $(this).val("");
        $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + value + "</li>");
    };
});
 $("input").focus(function() { 
            $(this).css("display", "inline"); 
        }); 

$(".fa-plus").click(function(){
	$('input[type="text"]').fadeToggle();
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});