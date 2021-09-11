
import '../styles/styles.css'
import 'lazysizes'


import GalleryGrid from './modules/GalleryGrid.js'
import GalleryImage from './modules/GalleryImage.js'

new GalleryGrid();
new GalleryImage();


if (module.hot) {
  module.hot.accept()
}