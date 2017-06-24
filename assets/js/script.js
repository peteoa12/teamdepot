

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

			timelineFour.fromTo(".donation-container", 0.3, {
				scale:0,
				y:200, 
				alpha:0
			},{
				scale:1,
				y:8,
				alpha:1,
			});
			
		}
	}, {
		offset:"25%"
	});



// ScrollMagic Events

	var controller = new ScrollMagic.Controller();

			var jetsTween = TweenMax.to("#jets",10,{left:2000})


			var jetsScene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration:500, offset: 50})
					
					.setTween(jetsTween) // trigger a TweenMax.to tween
					// .addIndicators({name: "0 (duration: 200)"}) // add indicators (requires plugin)
					.addTo(controller);











