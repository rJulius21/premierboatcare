class GalleryImage {
  constructor() {
    this.current = document.querySelector('#current')
    this.thumbs = document.querySelectorAll(".pic-gallery__thumb")

    this.events()
  }

  events() {
    this.thumbs.forEach(this.changeSource);
  }

  changeSource(item) {
    item.addEventListener('click', (e) => {
      current.src = e.target.src
    })
  }
}

export default GalleryImage

