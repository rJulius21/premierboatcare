
import '../styles/styles.css'
import 'lazysizes'


import SeadekGallery from './modules/SeadekGallery.js'
import GalleryImage from './modules/GalleryImage.js'

new SeadekGallery();
new GalleryImage();


if (module.hot) {
  module.hot.accept()
}