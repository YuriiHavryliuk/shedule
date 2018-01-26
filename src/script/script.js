//accordeon
"use strict";
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

}

//Drag & Drop
  	$( function() {
		$( ".calendar__day-group" ).sortable({
			revert: 1
		});
		$( ".calendar__item" ).draggable({
			connectToSortable: ".calendar__day-group",
			helper: "original",
			revert: "invalid"
		});
	} );


