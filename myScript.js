// JavaScript Document
	$("#filter").hide();
function search() {
	var liquidSearch = $("#liquidSearch");
	var search = $("#search");
	if (liquidSearch !=='') {
		search.html('You are searching for ');
		$("#filter").show();
		}
	else {
		search.html('');
		$("#filter").hide();
		};
}