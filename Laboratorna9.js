


const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#modal-btn1');
const closeBtn1 = document.querySelector('.close1');

modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);

const modal2 = document.querySelector('#my-modal2');
const modalBtn2 = document.querySelector('#modal-btn2');
const closeBtn2 = document.querySelector('.close2');

modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

const modal3 = document.querySelector('#my-modal3');
const modalBtn3 = document.querySelector('#modal-btn3');
const closeBtn3 = document.querySelector('.close3');

modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);
window.addEventListener('click', outsideClick3);

const modal4 = document.querySelector('#my-modal4');
const modalBtn4 = document.querySelector('#modal-btn4');
const closeBtn4 = document.querySelector('.close4');

modalBtn4.addEventListener('click', openModal4);
closeBtn4.addEventListener('click', closeModal4);
window.addEventListener('click', outsideClick4);

function openModal()
{
    {
          modal.style.display = 'block';
    }

}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) 
  {
    modal.style.display = 'none';
  }
}

function openModal1()
{
    {
          modal1.style.display = 'block';
    }

}

function closeModal1() {
  modal1.style.display = 'none';
}

function outsideClick1(e) {
  if (e.target == modal1) 
  {
    modal1.style.display = 'none';
  }
}

function openModal2()
{
    {
          modal2.style.display = 'block';
    }

}

function closeModal2() {
  modal2.style.display = 'none';
}

function outsideClick2(e) {
  if (e.target == modal2) 
  {
    modal2.style.display = 'none';
  }
}

function openModal3()
{
    {
          modal3.style.display = 'block';
    }

}

function closeModal3() {
  modal3.style.display = 'none';
}

function outsideClick3(e) {
  if (e.target == modal3) 
  {
    modal3.style.display = 'none';
  }
}

function openModal4()
{
    {
          modal4.style.display = 'block';
    }

}

function closeModal4() {
  modal4.style.display = 'none';
}

function outsideClick4(e) {
  if (e.target == modal4) 
  {
    modal4.style.display = 'none';
  }
}
