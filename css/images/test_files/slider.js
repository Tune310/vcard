$(document).ready(function() {
	
	$('#nav').each(function() {
		var $links = $(this).find('a'),
			panelIds = $links.map(function() { return this.hash; }).get().join(","),
			$panels = $(panelIds),
			$panelWrapper = $panels.filter(':first').parent(),
			delay = 500;
			
		$panels.hide();

		$links.click(function() {
			var $link = $(this),
				link = (this);
				
			if ($link.is('.selected')) {
				return;
			}
		
			$links.removeClass('selected');
			$link.addClass('selected');

			$panels.animate({ opacity : 0 }, delay);
			$panelWrapper.animate({
				height: 0
				
			}, delay, function() {
				var height = $panels.hide().filter(link.hash).show().css('opacity', 1).outerHeight();
				

			
				$panelWrapper.animate({
					height: height
					
				}, delay);
				



				
			});	
		});
		
		
		var showtab = window.location.hash ? '[hash=' + window.location.hash + ']' : ':first';
		
		$links.filter(showtab).click();
	
	});
	
});	