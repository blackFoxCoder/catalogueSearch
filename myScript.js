// JavaScript Document
	$("#filter").hide();
function search() {
	var liquidSearch = $("#liquidSearch");
	var search = $("#search");
	if (liquidSearch.val()!='') {
		search.html('You are searching for ');
		$("#filter").show();
		}
	else if(liquidSearch.val()=="")
	 {
		$("#filter").hide('slide');
		search.html('');
		};
}