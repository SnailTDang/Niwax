const header  = document.getElementById('header');
const whitelogo = document.querySelector('.white-logo')
const darklogo = document.querySelector('.dark-logo')
const dmca = document.querySelector('.dmca')
const menu = document.querySelector('.main-menu')
const boxshadow = document.querySelector('.btn-menu')
const topbutton = document.getElementById("scrolltop");


window.onscroll = function() {scrollFunction()};

const bgheader = "#fff";

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      header.classList.add('whitebg');
      whitelogo.style.display = 'none';
      darklogo.style.display = 'block';
      dmca.style.color = '#000'
      menu.style.height = '75px';
      boxshadow.classList.add('btn-boxshadow')
      topbutton.style.display = "block";

    } else {
      header.classList.remove('whitebg');
      darklogo.style.display = 'none';
      whitelogo.style.display = 'block';
      dmca.style.color = bgheader;
      menu.style.height = '85px';
      boxshadow.classList.remove('btn-boxshadow')
      topbutton.style.display = "none";
    } 
  }