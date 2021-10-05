<script type="text/javascript" src="main.15a3742f59a77bd161de.js"></script>

class GalleryImage {
  constructor() {
    this.pgClose = document.querySelector('#picGalleryClose')
    this.pgLArr = document.querySelector('#picGalleryLArr')
    this.pgRArr = document.querySelector('#picGalleryRArr')

    this.thumbs = document.querySelectorAll(".pic-gallery__thumb")
    this.thumbIndex = 0
    this.thumb = this.thumbs[this.thumbIndex]
    this.thumbSRC = this.thumb.src

    this.current = document.querySelector('#current')

    this.events()
  }

  events() {
    // log test
    this.logOnClick();
    console.log("gallery image connected");

    //module code executions
    this.thumbs.forEach(this.changeSource);
  }

  logOnClick() {
    this.pgClose.addEventListener('click', (e) => {
      console.log('clicked')
    })
  }

  changeSource(item) {
    item.addEventListener('click', (e) => {
      current.src = e.target.src
    })
  }
}

export default GalleryImage

