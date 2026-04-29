(function ($) {

	"use strict";

	// DETECT TOUCH DEVICE //
	function is_touch_device() {
		return !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
	}


	// PAGE LOADER //
	function page_loader() {

		var hash = window.location.hash;

		$(".loader-img").delay(500).fadeOut();
		$("#page-loader").delay(1000).fadeOut("slow");

		if (!hash) {

		} else {
			$(document).scrollTop($(hash).offset().top - 56);
		}
	}


	// SHOW/HIDE MOBILE MENU //
	function show_hide_mobile_menu() {

		$("#mobile-menu-button").on("click", function (e) {

			e.preventDefault();

			$("#mobile-menu").slideToggle(300);

		});

	}


	// MOBILE MENU //
	function mobile_menu() {

		if ($(window).width() < 992) {

			if ($("#menu").length > 0) {

				if ($("#mobile-menu").length < 1) {

					$("#menu").clone().attr({
						id: "mobile-menu",
						class: ""
					}).insertAfter("#header");

					$("#mobile-menu .megamenu > a").on("click", function (e) {

						e.preventDefault();

						$(this).toggleClass("open").next("div").slideToggle(300);

					});

					$("#mobile-menu .dropdown > a").on("click", function (e) {

						e.preventDefault();

						$(this).toggleClass("open").next("ul").slideToggle(300);

					});

				}

			}

		} else {

			$("#mobile-menu").hide();

		}

	}


	// HEADER SEARCH //
	function header_search() {

		$(".menu li.search a").on("click", function (e) {

			e.preventDefault();

			if (!$(".menu li.search a").hasClass("open")) {

				$("#search-form").fadeIn().addClass("open");

				$("#search-form").append('<a class="close" href="#">x</a>');

			}

			$("#search-form a.close").on("click", function (e) {

				e.preventDefault();
				$("#search-form").fadeOut().removeClass("open");
				$(this).remove();

			});

		});

		$(window).scroll(function () {

			$("#search-form").fadeOut(300);

		});

	}


	// STICKY //
	function sticky() {

		var sticky_point = $("#header-container").innerHeight() + 100;

		$("#header").clone().attr({
			id: "header-sticky",
			class: ""
		}).insertAfter("header");

		$(window).scroll(function () {

			if ($(window).scrollTop() > sticky_point) {
				$("#header-sticky").slideDown(300).addClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({
					"visibility": "hidden"
				});
			} else {
				$("#header-sticky").slideUp(100).removeClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({
					"visibility": "visible"
				});
			}

		});

		$("#header-sticky .menu li.search a").on("click", function (e) {

			e.preventDefault();

			if (!$("#header-sticky .menu li.search a").hasClass("open")) {

				$("#header-sticky #search-form").fadeIn().addClass("open");

				$("#header-sticky #search-form").append('<a class="close" href="#">x</a>');

			}

			$("#search-form a.close").on("click", function (e) {

				e.preventDefault();
				$("#header-sticky #search-form").fadeOut().removeClass("open");
				$(this).remove();

			});

		});

		$(window).scroll(function () {

			$("#header-sticky #search-form").fadeOut(300);

		});

	}

	// FOOTER PARALLAX //
	function footer_parallax() {

		if ($(window).width() > 767) {

		}

	}

	// PROGRESS BARS // 
	function progress_bars() {

		$(".progress .progress-bar:in-viewport").each(function () {

			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).animate({
					width: $(this).attr("data-width") + "%"
				}, 2000);
			}

		});

	}


	// CHARTS //
	function pie_chart() {

		if (typeof $.fn.easyPieChart !== 'undefined') {

			$(".pie-chart:in-viewport").each(function () {

				$(this).easyPieChart({
					animate: 1500,
					lineCap: "square",
					lineWidth: $(this).attr("data-line-width"),
					size: $(this).attr("data-size"),
					barColor: $(this).attr("data-bar-color"),
					trackColor: $(this).attr("data-track-color"),
					scaleColor: "transparent",
					onStep: function (from, to, percent) {
						$(this.el).find(".pie-chart-percent .value").text(Math.round(percent));
					}
				});

			});

		}

	}

	// COUNTER //
	function counter() {

		if (typeof $.fn.jQuerySimpleCounter !== 'undefined') {

			$(".counter .counter-value:in-viewport").each(function () {

				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					$(this).jQuerySimpleCounter({
						start: 0,
						end: $(this).attr("data-value"),
						duration: 2000
					});
				}

			});

		}
	}


	// SHOW/HIDE SCROLL UP //
	function show_hide_scroll_top() {

		if ($(window).scrollTop() > $(window).height() / 2) {
			$("#scroll-up").fadeIn(300);
		} else {
			$("#scroll-up").fadeOut(300);
		}

	}


	// SCROLL UP //
	function scroll_up() {

		$("#scroll-up").on("click", function () {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});

	}


	// ANIMATIONS //
	function animations() {

		if (typeof WOW !== 'undefined') {

			animations = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 100,
				mobile: false,
				live: true
			});

			animations.init();

		}

	}


	// EQUAL HEIGHT //
	function equal_height() {

		$(".text-boxes-list").each(function () {

			var x = 0;

			$(".text-boxes-list li").each(function () {

				if ($(this).height() > x) {
					x = $(this).height();
				}

			});

			$(".text-boxes-list li .text-box").css("height", x + "px");

		});

	}


	// IMAGES BOXES //
	function images_boxes() {

		$(".image-box.style-2 .image-box-content").append('<a class="close-image-box-content" href="#">x</a>');

		$(".image-box.style-2 > h4").on("click", function () {
			$(this).fadeOut(300).next(".image-box.style-2 .image-box-content").addClass("slideup");
		});

		$(".close-image-box-content").on("click", function (e) {
			e.preventDefault();
			$(this).parents("div").removeClass("slideup");
			$(this).parents("div").prev("h4").fadeIn(300);
		});

	}


	// CALLOUT //
	function callout() {

		$(".callout").each(function () {

			var x = 0;

			$(this).find("li").each(function () {

				if ($(this).height() > x) {
					x = $(this).height();
				}

			});

			$(this).find("li").css("height", x + "px");

		});

		$(".callout").on("click", function () {
			window.location = $(this).find("a").attr("href");
			return false;
		});

	}


	// FULL SCREEN //
	function full_screen() {

		if ($(window).width() > 767) {
			$(".full-screen").css("height", $(window).height() + "px");
		} else {
			$(".full-screen").css("height", "auto");
		}

	}


	// DOCUMENT READY //
	$(document).ready(function () {

		// STICKY //
		if ($("body").hasClass("sticky-header")) {
			sticky();
		}


		// MENU //
		if (typeof $.fn.superfish !== 'undefined') {

			$(".menu").superfish({
				delay: 500,
				animation: {
					opacity: 'show',
					height: 'show'
				},
				speed: 'fast',
				autoArrows: true
			});

		}


		// SHOW/HIDE MOBILE MENU //
		show_hide_mobile_menu();


		// MOBILE MENU //
		mobile_menu();


		// HEADER SEARCH //
		header_search();


		// FOOTER PARALLAX //
		if ($("body").hasClass("footer-parallax")) {
			footer_parallax();
		}


		// FANCYBOX //
		if (typeof $.fn.fancybox !== 'undefined') {

			$(".fancybox").fancybox({
				prevEffect: 'none',
				nextEffect: 'none',
				padding: 0
			});
		}

		// REVOLUTION SLIDER //
		if (typeof $.fn.revolution !== 'undefined') {

			$(".rev_slider").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 9000,
				navigation: {
					arrows: {
						style: "zeus",
						enable: true,
						hide_onmobile: true,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div> </div>',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						}
					},
					bullets: {
						style: "custom",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '',
						direction: "horizontal",
						space: 10,
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 40
					},
					touch: {
						touchenabled: "on",
						swipe_treshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: false,
						swipe_direction: "horizontal"
					}
				},
				gridwidth: 1170,
				gridheight: 770
			});

		}


		// GOOGLE MAPS //
		if (typeof $.fn.gmap3 !== 'undefined') {

			$(".map").each(function () {

				var data_zoom = 15,
					data_height,
					data_popup = false;

				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"), 10);
				}

				if ($(this).attr("data-height") !== undefined) {
					data_height = parseInt($(this).attr("data-height"), 10);
				}

				if ($(this).attr("data-address-details") !== undefined) {

					data_popup = true;

					var infowindow = new google.maps.InfoWindow({
						content: $(this).attr("data-address-details")
					});

				}


				$(this)
					.gmap3({
						address: $(this).attr("data-address"),
						zoom: data_zoom,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						scrollwheel: false
					})
					.marker([{
						address: $(this).attr("data-address")
					}])
					.on({
						click: function (marker, event) {
							if (data_popup) {
								infowindow.open(marker.get('map'), marker);
							}
						}
					});

				$(this).css("height", data_height + "px");

			});

		}


		// ISOTOPE //
		if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {

			$(".isotope").imagesLoaded(function () {

				var container = $(".isotope");

				container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.8s'
				});

				$(".filter li a").on("click", function () {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");

					var selector = $(this).attr("data-filter");
					container.isotope({
						filter: selector
					});

					return false;
				});

				$(window).resize(function () {
					container.isotope();
				});

			});

		}


		// PLACEHOLDER //
		if (typeof $.fn.placeholder !== 'undefined') {
			$("input, textarea").placeholder();
		}

		// PARALLAX //
		if (typeof $.fn.stellar !== 'undefined') {

			if (!is_touch_device()) {

				$(window).stellar({
					horizontalScrolling: false,
					verticalScrolling: true,
					responsive: true
				});

			} else {

				$(".parallax").addClass("parallax-disable");

			}

		}


		// SHOW/HIDE SCROLL UP
		show_hide_scroll_top();


		// SCROLL UP //
		scroll_up();


		// PROGRESS BARS //
		progress_bars();


		// PIE CHARTS //
		pie_chart();


		// COUNTER //
		counter();


		// ANIMATIONS //
		animations();


		// EQUAL HEIGHT //
		equal_height();


		// IMAGES BOXES //
		images_boxes();


		// CALLOUT //
		callout();


		// FULL SCREEN //
		full_screen();

	});


	// WINDOW SCROLL //
	$(window).scroll(function () {

		progress_bars();
		pie_chart();
		counter();
		show_hide_scroll_top();

	});


	// WINDOW RESIZE //
	$(window).resize(function () {

		mobile_menu();
		equal_height();
		callout();
		full_screen();

		if ($("body").hasClass("footer-parallax")) {
			footer_parallax();
		}

	});


	// WINDOW LOAD //
	$(window).load(function () {

		page_loader();

	});

})(window.jQuery);
