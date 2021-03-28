button.onclick = function () {
    if (button.style.backgroundColor === 'black') {
      button.style.backgroundColor = '#F87070';
      button.style.color = 'black';
    } else {
    button.style.backgroundColor = '#F87070';
      button.style.color = '#1E213F';
      
    }
}

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let modalBtn = document.getElementById('modal-aplly');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if ( event.target === modal ) {
    modal.style.display = 'none';
  }
}