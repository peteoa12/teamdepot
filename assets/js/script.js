$(document).ready(function(){

	// places, people!
	var hiddenOnLoad = [
		"#logo",
		".title-two",
		".copy-two",
		".title-three",
		".copy-three",
		".title-four",
		".copy-four",
		"#button-four",
		"#button-two",
		"#button-three"
	]

	TweenMax.set(hiddenOnLoad, {alpha:0});

	var timeLineOne = new TimelineMax({

	});

	TweenMax.to("#logo", 1, {alpha:0.8,y:10});

	timeLineOne.fromTo(".title-one", 0.4,{
		scale:0,
		y:200, 
		alpha:0
	},{
		scale:1,
		y:20,
		alpha:1,
		ease:Back.easeOut
	});

	timeLineOne.fromTo(".copy-one", 0.6,{
		x:200, 
		alpha:0
	},{
		x:0,
		alpha:1,
		ease:Back.easeOut
	});

// Waypoints
	$(".waypoint-1").waypoint(function(direction){

		if (direction == "down") {

			var timelineTwo = new TimelineMax({
			
			});

			timelineTwo.fromTo(".title-two", 0.3, { 
				y:20
			},{
				y:0,
				alpha:1
			});
			
			timelineTwo.fromTo(".copy-two", 0.3, {
				alpha:0
			},{
				alpha:1,
			});

			timelineTwo.fromTo("#button-two", 0.3, {
				alpha:0
			},{
				alpha:1,
			});
			
		}
	}, {
		offset:"25%"
	});//END WAYPOINT 1

	$(".waypoint-2").waypoint(function(direction){

		if (direction == "down") {

			var timelineThree = new TimelineMax({
			
			});

			timelineThree.fromTo(".title-three", 0.3, {
				y:20
			},{
				y:0,
				alpha:1
			});
			
			timelineThree.fromTo(".copy-three", 0.4, {
				alpha:0
			},{
				alpha:1,
			});

			timelineThree.fromTo("#button-three", 0.3, {
				alpha:0
			},{
				alpha:1
			});
			
		}
	}, {
		offset:"25%"
	});//END WAYPOINT 2

	$(".waypoint-3").waypoint(function(direction){

		if (direction == "down") {

			var timelineFour = new TimelineMax({
			
			});

			timelineFour.fromTo(".title-four", 0.3, {
				scale:0,
				y:200, 
				alpha:0
			},{
				scale:1,
				y:20,
				alpha:1,
			});
			
			timelineFour.fromTo(".copy-four", 0.4, {
				x:200, 
				alpha:0
			},{
				x:0,
				alpha:1,
			});

			timelineFour.fromTo("#button-four", 0.3, {
				alpha:0
			},{
				alpha:1,
			});
			
		}
	}, {
		offset:"25%"
	});//END WAYPOINT 3	

// ScrollMagic Events
	var controller = new ScrollMagic.Controller();

			var jetsTween = TweenMax.to("#jets",10,{left:2000})


			var tweenSaw = TweenMax.fromTo("#saw", 0.1,
							{x: -150},
							{x: -170,yoyo:true,repeat:-1}
			);

			var tweenHammer = TweenMax.fromTo("#jack-hammer",  0.1,
							{y:0},
							{y: 5, repeat:-1}
			);


			var tweenTruckOne = TweenMax.fromTo("#truck-one",  7,
							{left:-100},
							{left:1920, repeat:-1}
			);

			var tweenTruckTwo = TweenMax.fromTo("#truck-two",  6.5, {left:-100}, {left:1920, repeat:-1});

			var tweenTruckThree = TweenMax.fromTo("#truck-three",  6,
							{left:-100},
							{left:1920, repeat:-1}
			);

			var tweenTruckFour = TweenMax.fromTo("#truck-four",  9,
							{left:-100},
							{left:1920, repeat:-1}
			);

			var tweenTruckFive = TweenMax.fromTo("#truck-five",  10,
							{left:-100},
							{left:1920, repeat:-1}
			);

			var tweenTruckSix = TweenMax.fromTo("#truck-six",  8,
							{left:-100},
							{left:1920, repeat:-1}
			);

			var tweenPlaneOne = TweenMax.fromTo("#plane-one",  8,
							{x:0,y:0},
							{x:200,y:-500,rotation:20,scale:3,opacity:0}
			);

			var tweenPlaneTwo = TweenMax.fromTo("#plane-two",  8,
							{x:0,y:0},
							{x:-200,y:-500,rotation:-20,scale:3,opacity:0}
			);

// ScrollMagic scenes

			var jetsScene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration:500, offset: 50})
					
					.setTween(jetsTween) // trigger a TweenMax.to tween
					.addIndicators({name: "0 (duration: 200)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneOne = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					
					.setTween(tweenSaw) // trigger a TweenMax.to tween
					.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneTwo = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					
					.setTween(tweenHammer) // trigger a TweenMax.to tween
					.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneTruckOne = new ScrollMagic.Scene({triggerElement: "#trigger3", offset: -60})
					
					.setTween(tweenTruckOne) // trigger a TweenMax.to tween
					.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneTruckTwo = new ScrollMagic.Scene({triggerElement: "#trigger3", offset:-50})
					
					.setTween(tweenTruckTwo) // trigger a TweenMax.to tween
					.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneTruckThree = new ScrollMagic.Scene({triggerElement: "#trigger3", offset:-40})
					
					.setTween(tweenTruckThree) // trigger a TweenMax.to tween
					.addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);
						
			var sceneTruckOne = new ScrollMagic.Scene({triggerElement: "#trigger3", offset: -30})
					
					.setTween(tweenTruckOne) // trigger a TweenMax.to tween
					.addIndicators({name: "4 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneTruckFour = new ScrollMagic.Scene({triggerElement: "#trigger3", offset:-20})
					
					.setTween(tweenTruckFour) // trigger a TweenMax.to tween
					.addIndicators({name: "5 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneTruckFive = new ScrollMagic.Scene({triggerElement: "#trigger3", offset:-10})
					
					.setTween(tweenTruckFive) // trigger a TweenMax.to tween
					.addIndicators({name: "6 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var sceneTruckSix = new ScrollMagic.Scene({triggerElement: "#trigger3", offset:-20})
					
					.setTween(tweenTruckSix) // trigger a TweenMax.to tween
					.addIndicators({name: "7 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var scenePlaneOne = new ScrollMagic.Scene({triggerElement: "#trigger3", offset:-20})
					
					.setTween(tweenPlaneOne) // trigger a TweenMax.to tween
					.addIndicators({name: "8 (duration:0)"}) // add indicators (requires plugin)
					.addTo(controller);

			var scenePlaneTwo = new ScrollMagic.Scene({triggerElement: "#trigger3", offset:-20})
					
					.setTween(tweenPlaneTwo) // trigger a TweenMax.to tween
					.addIndicators({name: "8 (duration: 0)"}) // add indicators (requires plugin)
					.addTo(controller);
});









