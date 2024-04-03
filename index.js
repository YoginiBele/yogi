let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

// button
const revealBtn = document.getElementById('revealBtn');
const headingg = document.getElementById('headingg');

revealBtn.addEventListener('click', function() {
  if (headingg.classList.contains('hidden')) {
    headingg.classList.remove('hidden');
    revealBtn.style.display = 'none';
  } else {
    headingg.classList.add('hidden');
    revealBtn.style.display = 'block';
  }
});