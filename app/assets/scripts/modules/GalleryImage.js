class GalleryImage {
  constructor() {
    this.current = document.querySelector('#current')
    this.thumbs = document.querySelectorAll(".pic-gallery__thumb")

    this.events()
  }

  events() {
    console.log('wtf')
    console.log(this.current.src)
    this.thumbs.forEach(this.changeSource);
  }

  changeSource(item) {
    item.addEventListener('click', (e) => {
      current.src = e.target.src
    })
  }
}

export default GalleryImage

