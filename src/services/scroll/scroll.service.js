class Scroll {
  on () {
    document.body.style.overflowY = null;
  }

  off () {
    document.body.style.overflowY = 'hidden';
  }
}

export default Scroll;