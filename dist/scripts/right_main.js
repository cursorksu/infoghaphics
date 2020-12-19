"use strict";
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:false,
		autoWidth:true,
		items:1,
		nav:true,
		dots: false,
	});

	const owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.originalEvent.deltaY > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});


	$('.r_history_btn_prev').on('click',function(){
		$('.owl-prev').trigger('click');
	});
	$('.r_history_btn_next').on('click',function(){
		$('.owl-next').trigger('click');
	});

	let currentItem = 0;
	let prevDate = ''

	owl.on('changed.owl.carousel', function(e) {
		const idx = e.item.index;
		const itemsArray =$('.owl-item');

		if (idx - 2 >= 0) {
			prevDate = itemsArray[idx - 2].textContent.split('\n')[1].trim();

			$('.r_history_hide_left').addClass('next');
			$('#prevDate span').html(prevDate);
		} else {
			prevDate = '';
			$('.r_history_hide_left').removeClass('next');
			$('#prevDate span').html(prevDate);
		}
		itemsArray.removeClass('fade');
		itemsArray[idx - 2].classList.add('fade');

		const text = $('.owl-item.active .r_history_text').html();
		console.log({text, idx, currentItem})

		$('.r_history_item-text').html(text);
		currentItem = e.item.index;
	});
});
