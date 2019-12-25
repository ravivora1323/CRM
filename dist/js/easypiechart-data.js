/*Easypiechart Init*/

$(document).ready(function() {
	"use strict";
	if( $('#pie_chart_1').length > 0 ){
		$('#pie_chart_1').easyPieChart({
			barColor : '#f83f37',
			lineWidth: 3,
			animate: 3000,
			size:	50,
			lineCap: 'square',
			scaleColor: '#ffbf36',
			trackColor: '#ffbf36',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
});