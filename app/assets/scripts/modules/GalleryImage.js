class GalleryImage {
  constructor() {
    this.pgClose = document.querySelector('#picGalleryClose')
    this.pgLArr = document.querySelector('#picGalleryLArr')
    this.pgRArr = document.querySelector('#picGalleryRArr')
    this.featuredBox = document.querySelector('#galleryFeatured')

    this.thumbs = document.querySelectorAll(".pic-gallery__thumb")

    this.current = document.querySelector('#current')

    this.events()
  }

  events() {
    //console.log('image');
    this.changeSource()
    this.closeGallery()
  }

  changeSource() {
    let thumbIndex = 0
    let reelLength = this.thumbs.length

    document.addEventListener('click', (e) => {
      this.thumb = this.thumbs[thumbIndex]
      if (e.target === this.pgRArr && thumbIndex < reelLength) {
        thumbIndex++
      }
      if (e.target === this.pgLArr && thumbIndex <= reelLength) {
        thumbIndex--
      }
      this.current.src = this.thumb.src
      console.log(reelLength)
      console.log(thumbIndex)
      return this.thumb
    })
  }

  closeGallery() {
    this.pgClose.addEventListener('click', (e) => {
      this.featuredBox.classList.remove('pic-gallery__feature-box--active')
    })
  }

}

export default GalleryImage


// this.thumb = this.thumbs[this.thumbIndex]
//     this.thumbSRC = this.thumb.src
