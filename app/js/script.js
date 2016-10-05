$(() => {
/*object question and answers*/
var objQuestions =[
		{
			question_1: 'true + false',
			variant_1: 'true',
			variant_2: 'false',
			variant_3: '1'
		},
		{
			question_1: '7 / 0',
			variant_1: 'null',
			variant_2: 'undefined',
			variant_3: 'infinity'
		},
		{
			question_1: '5 || 0',
			variant_1: 'null',
			variant_2: '0',
			variant_3: '5'
		}
	];

/*write to localStorage*/
localStorage.setItem('strQuestions', JSON.stringify(objQuestions));
/*get value*/
let result = localStorage.getItem('strQuestions');
/*check string*/
console.log(result);
/*parse string to object*/
result = JSON.parse(result);
/*tamplate*/
	let html = $('#test').html();
	let content = tmpl(html, {
		data: result
	});
	$('body').append(content);

/*create array correct answers and convert array to string*/
let objAnswers = ['three', 'three','three'];
let strAnswers = JSON.stringify(objAnswers);

/*get values from checkbox*/
$('.btnInput').on('click', function(e) {
	e.preventDefault();
/*create new array*/
	let selectedItems = new Array();

	$('input[class="inputs"]:checked').each(function() {
		selectedItems.push($(this).val());
	});
/*write correct array to string*/
let strSelected = JSON.stringify(selectedItems);
/*check the correctness*/
	if (strSelected == strAnswers) {
		$('.modal p').text('Это победа!');
	} else {
		$('.modal p').text('Попробуй ещё..');
	}
/*show modal window*/
$('.modal').css('display', 'block');
/*clear checkbox*/
$('input:checkbox').removeAttr('checked');

/*THE END click event*/
});
/*close modal window*/
$('.close-modal').on('click', function() {
	$('.modal').css('display', 'none');
})

/*the end script*/
});

