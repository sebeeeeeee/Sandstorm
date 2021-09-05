// Don't steal code or u are gay lmao


const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');


const showAmPm = true;


function showTime() {
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;


  time.innerHTML = `${hour}<span>:</span>${addZero(min)}
   ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}


function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function setBgGreet() {
  let today = new Date(),
  hour = today.getHours();

  if (hour < 12) {

    document.body.style.backgroundImage = "url('https://source.unsplash.com/featured/1920x1080/?morning')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    
    document.body.style.backgroundImage = "url('https://source.unsplash.com/featured/1920x1080/?nature')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
   
    document.body.style.backgroundImage = "url('https://source.unsplash.com/featured/1920x1080/?evening')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter your name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
 
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}


function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter what you want to focus on today]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}


function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();










