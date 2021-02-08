<template>
<div>
    <!-- <div class="carousel-recs carousel-container"> -->
	<!-- HEADER -->
	<!-- <div class="carousel-header">
		<span class="header-text">
            <h2 class="header-words">Horizontal Carousel</h2>
        </span>
		<span class="header-paging">
            <a href="#" class="carousel-prev-rec">< </a>|
            <a href="#" class="carousel-next-rec"> ></a>
        </span>
	</div> -->
	<!-- BODY -->
	<div class="carousel-body">
		<!-- CAROUSEL ITEMS -->
		<ul class="carousel-list">
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
			<li class="carousel-listitem">
				<a href="#" class="carousel-itemlink">
				</a>
			</li>
		</ul>
	</div>

</div>
</template>

<script>
//  const recCarouselEvents = () => {

// 	// RECOMMENDATION CAROUSELS
// 	var recTranslate = 0;
// 	var recTranslateIncrem = 904;
// 	var carRecsItems = $('.carousel-recs .carousel-listitem');
// 	var carRecsItem = $(carRecsItems[0]);
// 	var carRecsItemWidth = carRecsItem.outerWidth(true);
// 	var carRecsRowWidth = (carRecsItemWidth * 4);
// 	var carRecsMaxRowWidth = (carRecsItemWidth * carRecsItems.length);

// 	$('.carousel-prev-rec').click(function() {
// 		// PREV RECS
// 		carRecsList = $(this).parents('.carousel-header')
// 			.siblings('.carousel-body').find('.carousel-list');
// 		recTranslate += recTranslateIncrem;

// 		if (recTranslate <= 0) {
// 			carRecsList.css('transform', 'translatex(' + recTranslate + 'px)');
// 		} else {
// 			recTranslate = 0;
// 		}
// 	})

// 	$('.carousel-next-rec').click(function() {
// 		// NEXT RECS 
// 		carRecsList = $(this).parents('.carousel-header')
// 			.siblings('.carousel-body').find('.carousel-list');
// 		recTranslate -= recTranslateIncrem;

// 		if (recTranslate >= -1808) {
// 			carRecsList.css('transform', 'translatex(' + recTranslate + 'px)');
// 		} else {
// 			recTranslate = -1808;
// 		}

// 	});
// }


// export default {
//     mounted:{
//         recCarouselEvents();
//     },

//     created: function(){
//     document.addEventListener('touchstart',this.touchStart);
//  }, 
// } 


</script>

<style>
.carousel-container {
	margin-bottom: 60px;
}

.carousel-header:before,
.carousel-header:after {
	display: table;
	clear: both;
	content: '';
}

.carousel-header .header-text {
	float: left;
}

.carousel-header .header-words {
	display: inline-block;
}

.carousel-header .header-paging {
	float: right;
}

.carousel-body {
	overflow: hidden;
}

.carousel-body:before,
.carousel-body:after {
	content: "";
	display: table;
	clear: both;
}

.carousel-body .carousel-list {
	list-style: none;
	padding-left: 0;
	width: 3202px;
	height: 200px;
	transition: transform 1s;
}

.carousel-body .carousel-listitem {
	float: left;
	margin-right: 26px;
	border: 1px solid #dadcdf;
	height: 200px;
	width: 200px;
}

.carousel-body .carousel-listitem:nth-child(2n) {
	background-color: #ececec;
}

.carousel-body .carousel-listitem:nth-child(2n+1) {
	background-color: #dadada;
}

.carousel-body .carousel-itemlink {
	text-decoration: none;
}

.carousel-body .carousel-listitem .carousel-hover-container {
	opacity: 0;
	transition: opacity .5s;
	height: 100%;
	width: 100%;
}

.carousel-body .carousel-listitem:hover .carousel-hover-container {
	display: block;
	background-color: rgba(255, 255, 255, .9);
	opacity: .9;
}


/* text */

.text-default {
	color: #7b7b7b;
}

.text-logo {
	color: #c7202c;
}

.bold {
	font-weight: bold;
}

h3 {
	color: #444444;
}
</style>

