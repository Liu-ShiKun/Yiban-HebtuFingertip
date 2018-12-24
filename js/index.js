(function (doc, win) {
     $('#list td,#list li').click(function(){

          location.href= $(this).data('href');
      });

      $('.ui-header .ui-btn').click(function(){
          location.href= 'index.html';
      });

      $("#btn1").click(function(){
    		$('.ui-actionsheet').addClass('show');
    	});

    	$("#cancel").click(function(){
    		$(".ui-actionsheet").removeClass("show");
    	});

})(document, window);
