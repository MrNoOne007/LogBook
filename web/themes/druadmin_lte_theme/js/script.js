$ = jQuery;

$(function(){

	$('ol.breadcrumb li').each(function(index, value){
		if( $.trim($(value).html()).length == 0 )
			$(value).remove();
	});

	
}
)
//  $(document).ready(function(){
// 	 var currentUser = $('body > div > div.dialog-off-canvas-main-canvas > div > section > div > h1');
// 	 if(currentUser =='admin'){
// 		 $('li:nth-child(4)').hide();
// 		 $('li:nth-child(5)').show();
// 	 }
// 	 else{
// 		 $('li:nth-child(5)').hide();
// 		 $('li:nth-child(4)').show();
// 	 }
//  })
 
