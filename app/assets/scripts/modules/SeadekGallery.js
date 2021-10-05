class SeadekGallery {
  constructor() {
    this.leftArr = document.querySelector('.seadek-gallery__arrow--left')
    this.rightArr = document.querySelector('.seadek-gallery__arrow--right')
    this.viewport = document.querySelector('#seadekViewport')
    this.slider = document.querySelector('.seadek-gallery__slider')
    this.imgBoxes = document.querySelectorAll('.seadek-gallery__img-box')
    this.imgs = document.querySelectorAll('.seadek-gallery__img')

    this.sliderCount = 0
    this.sliderSize = getComputedStyle(this.slider).getPropertyValue("width")

    this.events()
  }

  events() {
    // console.log test
    // console.log(this.sliderSize)

    // code for this module
    this.scrollRight()
    this.scrollLeft()
  }

  // RIGHT ARROW FUNCTIONALITY
  scrollRight() {


    let isHeld = false;

    this.rightArr.addEventListener('mousedown', () => {
      isHeld = true;
    });

    document.addEventListener('mouseup', () => {
      isHeld = false;
    });

    setInterval(() => {
      if (isHeld) {
        // Code to loop goes here
        this.sliderCount -= 2

        console.log(this.sliderCount)
        this.slider.style.left = `${this.sliderCount}px`;
        return this.sliderCount
      }
    }, 0);


  }
  ////////////

  // LEFT ARROW FUNCTIONALITY
  scrollLeft() {
    let isHeld = false;

    this.leftArr.addEventListener('mousedown', () => {
      isHeld = true;
    });

    document.addEventListener('mouseup', () => {
      isHeld = false;
    });

    setInterval(() => {
      if (isHeld) {
        // Code to loop goes here
        this.sliderCount += 2

        console.log(this.sliderCount)
        this.slider.style.left = `${this.sliderCount}px`;
        return this.sliderCount
      }
    }, 0);
  }
}

export default SeadekGallery

