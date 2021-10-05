
import '../styles/styles.css'
import 'lazysizes'


import SeadekGallery from './modules/SeadekGallery.js'
import GalleryGrid from './modules/GalleryGrid.js'
import GalleryImage from './modules/GalleryImage.js'

new SeadekGallery();
new GalleryGrid();
new GalleryImage();


if (module.hot) {
  module.hot.accept()
}