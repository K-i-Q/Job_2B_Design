$(document).ready(function(){
	$('.slider').slider();
	$('.slider').slider('pause');
    }
);

$('#proximo').on('click', function(){
	$('.slider').slider('next');
	$('.slider').slider('pause');
});
