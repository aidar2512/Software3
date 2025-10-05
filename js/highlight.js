$(document).ready(function(){

	var str=location.href.toLowerCase();

	$("#nav li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$("li.current").removeClass("current");
			$(this).parent().addClass("current");
		}
	});
	$("li.current").parents().each(function(){
		if ($(this).is("li")){
			$(this).addClass("current");
		}
	});

	$("#nav").hover(
	  	function () {
	    	$("li.current").removeClass("current");
	  	},
	  	function () {

	    	var str=location.href.toLowerCase();

			$("#nav li a").each(function() {
				if (str.indexOf(this.href.toLowerCase()) > -1) {
					$("li.current").removeClass("current");
					$(this).parent().addClass("current");
				}
			});

			$("li.current").parents().each(function(){
				if ($(this).is("li")){
					$(this).addClass("current");
				}
			});
	  	}
	);
})// Commit 46 by aidar2512 (2025-10-05 23:43:12): Make news section responsive
if (typeof window !== 'undefined'){/* marker 46 */}

// Commit 46 by aidar2512 (2025-10-05 23:51:57): Make news section responsive
if (typeof window !== 'undefined'){/* marker 46 */}

