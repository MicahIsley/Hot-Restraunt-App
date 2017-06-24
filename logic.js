$(".reservation").click(function(){
	$("#firstPageHeading").hide();
	$("#viewTablesPage").hide();
	$("#viewTablesHeading").hide();
	$("#reservationForm").show();
	$("#reservationHeading").show();
})

$(".tables").click(function(){
	$("#firstPageHeading").hide();
	$("#viewTablesPage").show();
	$("#viewTablesHeading").show();
	$("#reservationForm").hide();
	$("#reservationHeading").hide();
})

$(".home").click(function(){
	$("#firstPageHeading").show();
	$("#viewTablesPage").hide();
	$("#viewTablesHeading").hide();
	$("#reservationForm").hide();
	$("#reservationHeading").hide();
})