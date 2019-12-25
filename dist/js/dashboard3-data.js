/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	if( $('.peity-line').length > 0 ){
		/*line*/
		$('.peity-line').each(function() {
			$(this).peity("line", $(this).data());
		});
	}
	if( $('#pie_chart_1').length > 0 ){
		$('#pie_chart_1').easyPieChart({
			barColor : '#ffbf36',
			lineWidth: 3,
			animate: 3000,
			size:	50,
			lineCap: 'square',
			scaleColor: '#fff',
			trackColor: '#fff',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
});

var sparklineLogin = function() { 
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([10,25,15,20,15,10], {
			type: 'bar',
			width: '100',
			height: '45',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#ffbf36',	
			highlightSpotColor: '#ffbf36'
		});
	}
	if( $('#sparkline_5').length > 0 ){
		$("#sparkline_5").sparkline([20,25,15,20,15,1], {
			type: 'bar',
			width: '100',
			height: '45',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#88c241',	
			highlightSpotColor: '#88c241'
		});
	}
}

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_11').length > 0 ){
		var eChart_11 = echarts.init(document.getElementById('e_chart_11'));
		var option11 = {
			color: ['#00acf0', '#ffbf36', '#22af47','#f83f37'],		
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Poppins', sans-serif",
					fontSize: 12
				}	
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				top: 'center',
				showTitle: false,
				feature: {
					mark: {show: true},
					magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
					restore: {show: true},
				}
			},
			grid: {
				left: '3%',
				right: '10%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['2011','2012','2013','2014','2015','2016','2017'],
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
					splitLine: {
						show: false,
					}
				}
			],
			series : [
				{
					name:'1',
					type:'bar',
					data:[320, 332, 301, 334, 390, 330, 320]
				},
				{
					name:'2',
					type:'bar',
					stack: 'st1',
					data:[120, 132, 101, 134, 90, 230, 210]
				},
				{
					name:'3',
					type:'bar',
					stack: 'st1',
					data:[220, 182, 191, 234, 290, 330, 310]
				},
				{
					name:'4',
					type:'bar',
					stack: 'st1',
					data:[150, 232, 201, 154, 190, 330, 410]
				}
			]
		};

		eChart_11.setOption(option11);
		eChart_11.resize();
	}
}
/*****E-Charts function end*****/
$('#dash-tab a').on('click', function (e) {
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
})

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline-Chart Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
sparklineLogin();
/*****Function Call end*****/