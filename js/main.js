let navbarTop = document.getElementById('navbar-id');
console.log(navbarTop);
window.addEventListener('scroll', (event) => {
  let windowHeight = this.scrollY;
  if (windowHeight > navbarTop.clientHeight) {
    navbarTop.style =
      'background-color:rgb(240, 240, 240); transition:background-color  ease-in-out 0.1s';
  } else {
    navbarTop.style = 'background-color:transparent';
  }
});
