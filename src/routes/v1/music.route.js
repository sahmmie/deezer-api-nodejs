const express = require('express');
const userController = require('../../controllers/music.controller');

const router = express.Router();

router.route(`/search`).get(userController.searchSongsOrArtist);
router.route(`/artistInfo/:artistId`).get(userController.getArtistInfo);
router.route(`/topSong/:artistId`).get(userController.getArtistTopSongs);
router.route(`/album/:artistId`).get(userController.getArtistAlbums);

module.exports = router;
