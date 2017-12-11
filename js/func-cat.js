$(document).ready(function(){


// ---------------------------- Activamos las secciones ----------------------------- //
	$("#b").hide();
	$(".zapa").hide();
	$("#c").hide();
	$("#d").hide();
	$("#e").hide();
$(".menu-zapa").on("click",function(){
	$(".remera").hide(1250);
	$("#azapa").show(2000);
});

$(".menu-remera").on("click",function(){
	$(".zapa").hide(1250);
	$("#a").show(2000);
});
// ------------------------------------------------------------------------------------- //
	
// ---------------------------- Averiguamos cual esta activa para el paginador -------------------- //

	$("#derecha").on("click",function(){
		if($(".remera").is(":visible")){
			if($("#a").is(":visible")){
				$("#b").show(2000);
				$("#a").hide(1250);
			}else if($("#b").is(":visible")){
				$("#c").show(2000);
				$("#b").hide(1250);
			}else if($("#c").is(":visible")){
				$("#d").show(2000);
				$("#c").hide(1250);
			}else if($("#d").is(":visible")){
				$("#e").show(2000);
				$("#d").hide(1250);
			}
		}else if($(".zapa").is(":visible")){
				
			if($("#azapa").is(":visible")){
			$("#bzapa").show(2000);
			$("#azapa").hide(1250);
			}
		}
	});


	$("#izquierda").on("click",function(){
		if($(".remera").is(":visible")){
			if($("#b").is(":visible")){
				$("#a").show(2000);
				$("#b").hide(1250);
			}else if($("#c").is(":visible")){
				$("#b").show(2000);
				$("#c").hide(1250);
			}else if($("#d").is(":visible")){
				$("#c").show(2000);
				$("#d").hide(1250);
			}else if($("#e").is(":visible")){
				$("#e").hide(1250);
				$("#d").show(2000);
			}
	}		
	});

});














