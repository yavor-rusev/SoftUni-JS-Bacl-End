const express = require('express');
const { homeController, searchController, detailsController } = require('../controllers/catalog');
const { aboutController } = require('../controllers/about');
const { createGet: createMovieGet, createPost: createMoviePost } = require('../controllers/movie');
const { createGet: createCastGet, createPost: createCastPost } = require('../controllers/cast');
const { attachGet, attachPost } = require('../controllers/attach');
const { errorController } = require('../controllers/404');


const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/details/:id', detailsController);
router.get('/search', searchController);
router.get('/create/movie', createMovieGet);
router.post('/create/movie', createMoviePost);
router.get('/create/cast', createCastGet);
router.post('/create/cast', createCastPost);
router.get('/attach/cast/:id', attachGet);
router.post('/attach/cast/:id', attachPost);

router.all('*', errorController);

module.exports = {
    router
};
