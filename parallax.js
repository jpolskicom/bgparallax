/*
  Background parallax by Jacek Polski 2019

  Please remember that image shoud be taller then div area!

*/

export function bgParallax(elem = null, speed = .2){
  if (elem) {
    if (typeof elem === 'string') {
      this.parallaxItem = document.querySelector(elem);
    }else{
      this.parallaxItem = elem;
    }
    if (this.parallaxItem) {
      this.item = {
        'top': this.parallaxItem.offsetTop-window.innerHeight,
        'height': this.parallaxItem.offsetHeight,
        'position': this.parallaxItem.offsetTop + this.parallaxItem.offsetHeight
      };
      window.addEventListener('scroll', () => {
        this.pageTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
        if (this.pageTop >= this.item.top && this.pageTop <= this.item.position) {
          this.parallaxItem.style.backgroundPosition = '0 '+ parseFloat((this.pageTop - (this.item.top*3))*speed)+'px';
        };
      });
    };
  };
};
