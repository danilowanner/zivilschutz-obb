jQuery(document).ready(function(){

(function($) {

  /* E-Mail Obfuscation */
  $('a.obfuscate').each(function()
	{
    var html = $(this).html();
		var href = $(this).attr("href");

		var email = html + "@" + href.substring(7);
		$(this).attr("href","mailto:"+email).html(email);
	});

})(jQuery);

});
