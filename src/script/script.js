//accordeon

var acc = document.getElementsByClassName('js-acc');
var i;

for (i = 0; i < acc.length; i++){
	acc[i].onclick = function(){
		this.classList.toggle("js-acc-active");
		this.nextElementSibling.classList.toggle("js-acc-show");
	}
}


