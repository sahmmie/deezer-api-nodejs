const catchAsync = require('../utils/catchAsync');
const { musicService } = require('../services');

const searchSongsOrArtist = catchAsync(async (req, res) => {
  const { keyword } = req.query;
  const nextIndex = parseInt(req.query.index.toString(), 10) || 0;
  if (!keyword) {
    throw Error('Search pharse is required!');
  }
  const searchResultData = await musicService.searchArtistOrSongs(keyword, nextIndex);
  res.status(200).send(searchResultData);
});

const getArtistInfo = catchAsync(async (req, res) => {
  const { artistId } = req.params;
  const artistInfo = await musicService.searchArtistInfo(artistId);
  res.status(200).send(artistInfo);
});

const getArtistAlbums = catchAsync(async (req, res) => {
  const { artistId } = req.params;
  const artistAlbums = await musicService.searchArtistAlbums(artistId);
  res.status(200).send(artistAlbums);
});

const getArtistTopSongs = catchAsync(async (req, res) => {
  const { artistId } = req.params;
  const songs = await musicService.searchTopSongs(artistId);
  res.status(200).send(songs);
});

module.exports = {
  searchSongsOrArtist,
  getArtistInfo,
  getArtistAlbums,
  getArtistTopSongs,
};
