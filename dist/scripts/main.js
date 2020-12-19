'use strict';
$(function() {
	const popUp = $('.lr-popup');
	const popUpContent = $('.lrp-content');


	const body = $('body');

	const handlerOpenPopUp = (e) => {
		const {id} = e.target;
		const titleHeight = $(`[data-id="${id}"`).find('h2').height();

		if (id.includes('ev_') ) {
			console.log(id, id.includes('ev_'))
			popUp.removeClass('l_popup_dark').addClass('l_popup_light');
		} else {
			popUp.removeClass('l_popup_light').addClass('l_popup_dark');
		}

		if (window.matchMedia('(min-width: 767px)').matches) {
			if (titleHeight > 68) {
				popUpContent.closest('.lrp-inner').height('auto');
			} else {
				popUpContent.closest('.lrp-inner').height('357px');
			}
		} else {
			if (titleHeight > 78) {
				popUpContent.closest('.lrp-inner').height('auto');
			} else {
				popUpContent.closest('.lrp-inner').height('357px');
			}
		}

		if (id.includes('finger') ) {
				$(`#${id}`).addClass('red');
				setTimeout(() => {
					$(`#${id}`).removeClass('red');
					body.addClass('popup-on-screen');
					const content = $(`[data-id="${id}"`).html();
					popUpContent.html(content);
					$(".scrollbar-inner").niceScroll();
			}, 200);
			return;
		}


		body.addClass('popup-on-screen');
		const content = $(`[data-id="${id}"`).html();
		popUpContent.html(content);
		$(".scrollbar-inner").niceScroll();
	}

	$('.l_grid_item').on('click', handlerOpenPopUp);
	$('.l_finger_btn').on('click', handlerOpenPopUp);
	$('.l_grid_btn').on('click', handlerOpenPopUp);
});

