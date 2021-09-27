
import '../styles/styles.css'
import 'lazysizes'


import GalleryGrid from './modules/GalleryGrid.js'
import GalleryImage from './modules/GalleryImage.js'
import SeadekGallery from './modules/SeadekGallery.js'

new GalleryGrid();
new GalleryImage();
new SeadekGallery();


if (module.hot) {
  module.hot.accept()
}