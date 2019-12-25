/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	/*Toaster Alert*/
	$.toast({
		heading: 'Well done!',
		text: '<p>You have successfully completed level 1.</p><button class="btn btn-danger btn-sm mt-10">Play again</button>',
		position: 'bottom-right',
		loaderBg:'#ffbf36',
		class: 'jq-toast-danger',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
});

/*****E-Charts function start*****/
var echartsConfig = function() { 
		if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option2 = {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)",
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Poppins', sans-serif",
					fontSize: 12
				}	
			},
			legend: {
				show:false
			},
			toolbox: {
				show : false,
			},
			calculable : true,
			itemStyle: {
				 normal: {
					 shadowBlur: 5,
					 shadowColor: 'rgba(0, 0, 0, 0.5)'
				 }
			},
			series : [
				{
					name:'Advertising',
					type:'pie',
					radius : '80%',
					center : ['50%', '50%'],
					roseType : 'radius',
					color: ['#00acf0', '#ffbf36', '#22af47'],
					label: {
						normal: {
							fontFamily: "'Poppins', sans-serif",
							fontSize: 12
						}
					},
					data:[
						{value:335, name:'Active'},
						{value:310, name:'Closed'},
						{value:274, name:'Hold'},
					].sort(function (a, b) { return a.value - b.value; }),
				},
			],
			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 1000;
			}	
		};
		eChart_2.setOption(option2);
		eChart_2.resize();
	}

	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var option3 = {
			color: ['#00acf0','#ffbf36'],
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Poppins", sans-serif;',
					fontSize: 12
				}	
			},
			xAxis: {
				type: 'category',

				boundaryGap: false,
				splitLine: {
					show: false
				},
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontSize: 12,
						fontFamily: "'Poppins', sans-serif",
					}
				},
				"splitArea": {
					"show": false
				},
				
				data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
			},
			grid: {
				left: '6%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			yAxis: {
				axisLine: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontSize: 12,
						fontFamily: "'Poppins', sans-serif",
					}
				},
				splitLine: {
					show: false,
				},
			},
			series: [{
					name: 'A',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 4,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 0
						}
					},
					areaStyle: {
						normal: {
							opacity: "1",
						}
					},
					data: [0, 7.5, 1.0, 3.7, 0, 3, 8, 0,3.6, 4, 2, 0]
				},

				{
					name: 'B',
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 4,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 0
						}
					},
					areaStyle: {
						normal: {
							opacity: "1",
						}
					},
					data: [0, 2.2, 2, 2.2, 0, 1.5, 0, 2.4, 1, 3, 1, 0]
				}
			]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
	}
	
	if( $('#e_chart_6').length > 0 ){
		var eChart_6 = echarts.init(document.getElementById('e_chart_6'));
		var option5 = {
			color: ['#00acf0'],
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Poppins", sans-serif;',
					fontSize: 12
				}	
			},
			
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#6f7a7f'
						}
					}
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#6f7a7f'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'transparent',
						}
					}
				}
			],
		   
			series: [
				{
					data:[420, 332, 401, 334, 400, 330, 410],
					type: 'bar',
					barMaxWidth: 30,
				},
				{
					data: [120, 152, 251, 124, 250, 120, 110],
					type: 'bar',
					symbolSize: 6,
					smooth: true,
					itemStyle: {
						color: '#ffbf36',
					},
					lineStyle: {
						color: '#ffbf36',
						width:2,
					}
				}
			]
		};
		eChart_6.setOption(option5);
		eChart_6.resize();
	}
	
}
/*****E-Charts function end*****/

/*****Resize function start*****/
var echartResize;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/