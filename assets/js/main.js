/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		settings = {

			// Carousels
			carousels: {
				speed: 4,
				fadeIn: true,
				fadeDelay: 250
			},

		};

	// Breakpoints.
	breakpoints({
		wide: ['1281px', '1680px'],
		normal: ['961px', '1280px'],
		narrow: ['841px', '960px'],
		narrower: ['737px', '840px'],
		mobile: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});


	// Scrolly.
	$('.scrolly').scrolly();

	// Nav.

	// Button.
	$(
		'<div id="navButton">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// Carousels.
	$('.carousel').each(function () {

		var $t = $(this),
			$reel = $t.children('.reel'),
			$items = $reel.children('article');

		var pos = 0,
			leftLimit,
			rightLimit,
			itemWidth,
			reelWidth,
			timerId;

		// Items.
		if (settings.carousels.fadeIn) {

			$items.addClass('loading');

			$t.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				enter: function () {

					var timerId,
						limit = $items.length - Math.ceil($window.width() / itemWidth);

					timerId = window.setInterval(function () {
						var x = $items.filter('.loading'), xf = x.first();

						if (x.length <= limit) {

							window.clearInterval(timerId);
							$items.removeClass('loading');
							return;

						}

						xf.removeClass('loading');

					}, settings.carousels.fadeDelay);

				}
			});

		}

		// Main.
		$t._update = function () {
			pos = 0;
			rightLimit = (-1 * reelWidth) + $window.width();
			leftLimit = 0;
			$t._updatePos();
		};

		$t._updatePos = function () { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

		// Forward.
		$forward
			.appendTo($t)
			.hide()
			.mouseenter(function (e) {
				timerId = window.setInterval(function () {
					pos -= settings.carousels.speed;

					if (pos <= rightLimit) {
						window.clearInterval(timerId);
						pos = rightLimit;
					}

					$t._updatePos();
				}, 10);
			})
			.mouseleave(function (e) {
				window.clearInterval(timerId);
			});

		// Backward.
		$backward
			.appendTo($t)
			.hide()
			.mouseenter(function (e) {
				timerId = window.setInterval(function () {
					pos += settings.carousels.speed;

					if (pos >= leftLimit) {

						window.clearInterval(timerId);
						pos = leftLimit;

					}

					$t._updatePos();
				}, 10);
			})
			.mouseleave(function (e) {
				window.clearInterval(timerId);
			});

		// Init.
		$window.on('load', function () {

			reelWidth = $reel[0].scrollWidth;

			if (browser.mobile) {

				$reel
					.css('overflow-y', 'hidden')
					.css('overflow-x', 'scroll')
					.scrollLeft(0);
				$forward.hide();
				$backward.hide();

			}
			else {

				$reel
					.css('overflow', 'visible')
					.scrollLeft(0);
				$forward.show();
				$backward.show();

			}

			$t._update();

			$window.on('resize', function () {
				reelWidth = $reel[0].scrollWidth;
				$t._update();
			}).trigger('resize');

		});

	});


	const storeHours = {
		mon: { opens: "09:00", closes: "18:00" },
		tue: { opens: "09:00", closes: "18:00" },
		wed: { opens: "09:00", closes: "18:00" },
		thu: { opens: "09:00", closes: "18:00" },
		fri: { opens: "09:00", closes: "20:00" },
		sat: { opens: "10:00", closes: "16:00" },
		sun: null,
	};
	
	function displayStoreHours() {
		const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		const today = days[new Date().getDay()];
		const hoursContainer = document.getElementById("horarios");
		const statusElement = document.getElementById("status");
	
		let status = "Closed";
		let statusClass = "status-fechado";
	
		days.forEach(day => {
			const hour = storeHours[day];
			const li = document.createElement("li");
			li.textContent = hour
				? `${day.toUpperCase()}: ${hour.opens} - ${hour.closes}`
				: `${day.toUpperCase()}: Closed`;
	
			if (day === today) {
				li.classList.add("hoje");
	
				if (hour) {
					const now = new Date();
					const [openHour, openMinute] = hour.opens.split(":").map(Number);
					const [closeHour, closeMinute] = hour.closes.split(":").map(Number);
					const opensAt = new Date();
					opensAt.setHours(openHour, openMinute, 0);
					const closesAt = new Date();
					closesAt.setHours(closeHour, closeMinute, 0);
	
					if (now >= opensAt && now <= closesAt) {
						status = "Open";
						statusClass = "status-aberto";
					}
				}
			}
	
			hoursContainer.appendChild(li);
		});
	
		statusElement.textContent = status;
		statusElement.className = statusClass;
	}
	
	function updateMap() {
		const storeSelector = document.getElementById("store-selector");
		const address = storeSelector.value;
	
		if (address) {
			const formattedAddress = encodeURIComponent(address);
			const mapIframe = document.getElementById("map");
			mapIframe.src = `https://www.google.com/maps?q=${formattedAddress}&output=embed`;
		} else {
			alert("Please select a store.");
		}
	}
	
	window.onload = displayStoreHours;
	
	
  

})(jQuery);