$(
  function(){
    $(".pseudolink").hover(
      function(){
        var blockId = $(this).attr("href");
        $("div"+blockId).addClass("active");
      },
      function(){
        $("div.active").removeClass("active");
      }
    );
    $(".pseudolink").click(
      function(){
        return false;
      }
    );    
  
    /* Custom scrollbar */
  
    $('.scroll').each(
		function()
		{
			$(this).jScrollPane(
				{
        showArrows: false,
        animateScroll: true
				}
			);
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind(
				'resize',
				function()
				{
					if ($.browser.msie) {
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					} else {
						api.reinitialise();
					}
				}
			);
		}
	)
    
  }
)