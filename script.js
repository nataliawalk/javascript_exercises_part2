// ex 1

document.querySelector('h1').style.fontSize = '40px';
document.querySelector('h3').style.fontSize = '20px';
document.querySelector('h6').style.fontSize = '10px';

const tytuly = document.querySelectorAll('.tytul')    
let rozmiarCzcionki = 0;

for(let tytul of tytuly)    
{
	tytul.addEventListener("wheel",function(event) {
		pozJed = this.style.fontSize.indexOf("px");
		rozmiarCzcionki = Number(this.style.fontSize.substr(0,pozJed));
		console.log(rozmiarCzcionki);
		event.preventDefault();
		if(event.deltaY>0) {
			rozmiarCzcionki++;
			this.style.fontSize = rozmiarCzcionki + 'px';
		}
		else{  
			rozmiarCzcionki--;
			this.style.fontSize = rozmiarCzcionki  + 'px';
		}
	})
}


// ex 2

const div2 = document.querySelectorAll('.div2');

div2.forEach((element) => {
  let size = 30;
  element.style.fontSize = size + 'px';

  element.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (e.deltaY > 0) {
      size--;
      element.style.fontSize = size + 'px';
    } else if (e.deltaY < 0) {
      size++;
      element.style.fontSize = size + 'px';
    }
  });
});

//ex 3

const inputs3 = document.querySelectorAll('.input3');

for(let input of inputs3) {
	input.addEventListener('focus', function() {
		this.nextElementSibling.innerHTML = this.dataset.opis;
	});
	input.addEventListener('blur', function() {
		this.nextElementSibling.innerHTML = '';
	});
}

//ex 4

const div4 = document.querySelector('.div4');
const span4 = document.querySelector('.span4');

div4.addEventListener('mouseover', function() {
	span4.innerHTML = 'najechałes';
});
div4.addEventListener('mouseout', function() {
	span4.innerHTML = 'zjechałes';
});

//ex 5

const div5 = document.querySelector('.div5');
const button5 = document.querySelector('.button5');

button5.addEventListener('click', (e) => {
	alert('Kliknięto na buttona');
	e.stopPropagation();
});

div5.addEventListener('click', function(){
	alert('Kliknięto na diva');
});

//ex 6 

const span6 = document.querySelector('.span6');
const przyciski = document.querySelector('#przyciski');
const opis = document.querySelector('#opis');

let przyciskiAll = '';
for(i=1; i<=5; i++) {
	przyciskiAll += '<button name="przycisk'+i+'" value="'+100*i+'">Przycisk'+i+'</button><p>'+i+'. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius luctus massa, non suscipit ipsum accumsan sit amet.</p>';
};
przyciski.innerHTML = przyciskiAll;

przyciski.addEventListener('click', (e) => {
	span6.innerHTML='Nazwa: '+ e.target.name +', wartosc: '+e.target.value;
	opis.innerHTML = e.target.nextElementSibling.innerHTML;
});
