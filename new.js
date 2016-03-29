$(function(){
	$('#translate-button').on('click', function () {
		var word = $('#text-content').val();
		$.ajax ({
			url: "https://translate.yandex.net/api/v1.5/tr.json/translate",
			dataType:"jsonp",
			data: {
				key:"trnsl.1.1.20160328T160035Z.f831d864b7d39013.7a54876c4185e9fb9d378adc4a36f33f6958df9c",
				text: word,
				lang: "en-ru",
		}}).then(function(data) {
				$('#output-container').val(data.text[0]);
			})
	});
});