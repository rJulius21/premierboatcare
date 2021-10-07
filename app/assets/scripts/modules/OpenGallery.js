class OpenGallery {
  constructor() {

    this.galleryBox = document.querySelector('#galleryFeatured')

    this.thumbs = document.querySelectorAll(".pic-gallery__thumb")
    this.thumbIndex = 0


    this.current = document.querySelector('#current')

    this.events()
  }

  events() {
    console.log(this.galleryBox);
    this.thumbs.forEach(this.openGallery)

  }





  openGallery(item) {
    item.addEventListener('click', (e) => {
      this.galleryBox.classList.add('pic-gallery__feature-box--active')
      console.log('clicked')
    })
  }

}

export default OpenGallery


// this.thumb = this.thumbs[this.thumbIndex]
//     this.thumbSRC = this.thumb.src
