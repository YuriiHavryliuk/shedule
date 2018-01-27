//accordion for phone
"use strict";

window.onload = function(){

var acc = {
	init: function(){
var accTitle = document.getElementsByClassName('js-acc');

for (var i = 0; i < accTitle.length; i++){
	accTitle[i].addEventListener('click', function(){
		if(!(this).classList.contains('active')){
			for (var i = 0; i < accTitle.length; i++){
				accTitle[i].classList.remove('active');
			}
			this.classList.add('active');
	}
	})
}}
}

acc.init();
//end of accordion code


//Drag & Drop
var dragDrop = {
	init: function(){  	$( function() {
		$( ".calendar__day-group" ).sortable({
			revert: 1
		});
		$( ".calendar__item" ).draggable({
			connectToSortable: ".calendar__day-group",
			helper: "original",
			revert: "invalid"
		});
	} );

}}

dragDrop.init();

//Modal close
var modalClose = {
	init: function(){
document.querySelector('.js-modal-close').onclick = function(){
	document.querySelector('html').classList.toggle('modal-open');
}
}}

modalClose.init();

//Modal button cancel
var modalCancel = {
	init: function(){
		 document.querySelector('.js-modal-cancel').onclick = function(){
	document.querySelector('html').classList.toggle('modal-open');
}}
}
modalCancel.init();

//Modal open
var modalOpen = {
	init: function(){
document.querySelector('.js-open-modal').onclick = function(){
	document.querySelector('html').classList.toggle('modal-open');
}}
}
modalOpen.init();

//Show message in modal
function messageModal(e){
		return document.querySelector('.modal__message').innerHTML = e;
	}

	
//Book new class
var addNewClass = {
	init: function(){
var btnAddClass = document.querySelector('.js-modal-ok');

btnAddClass.onclick =  function(){

	var time = document.querySelector('input[type="text"].modal__input--time').value;
	var className = document.querySelector('input[type="text"].modal__input--class').value;
	var coachName = document.querySelector('input[type="text"].modal__input--coach').value;

	if ((time == "" || time == " ") || (className == "" || className == " ") || (coachName == "" || coachName == " ")){
		messageModal("Fill in all the fields!");
	}
	else{

  var tempItem = document.querySelector('.js-template-item'),
  addCol = tempItem.content.querySelectorAll(".calendar__subitem");
  addCol[0].textContent = time;
  addCol[1].textContent = className;
  addCol[2].textContent = coachName;

  var dayName = document.querySelector('select.modal__select').value;
  var day = "[data-day="+"\""+dayName+"\"]";
  var addNewItem = document.querySelectorAll(day);

  var cloneItem = document.importNode(tempItem.content, true);
  addNewItem[0].append(cloneItem);
  
  messageModal("Class successfully booked");
  
	}

}}
}

addNewClass.init();

}



