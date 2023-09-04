const axios = require('axios');

const getIndexFromUrl = async (urlString) => {
  const url = new URL(urlString);
  const indexValue = url.searchParams.get('index');
  return indexValue;
};

const searchArtistOrSongs = async (keyword, nextIndex) => {
  const path = `${process.env.API_URL}/search?q=${keyword}&index=${nextIndex}`;
  const axiosResponse = (
    await axios({
      method: 'get',
      url: path,
    })
  ).data;
  return {
    data: axiosResponse.data,
    total: axiosResponse.total,
    next: axiosResponse.next && getIndexFromUrl(axiosResponse.next),
    prev: axiosResponse.prev && getIndexFromUrl(axiosResponse.next),
  };
};

const searchArtistInfo = async (artistId) => {
  const path = `${process.env.API_URL}/artist/${artistId}`;
  const axiosResponse = (
    await axios({
      method: 'get',
      url: path,
    })
  ).data;
  return axiosResponse;
};

const searchArtistAlbums = async (artistId) => {
  const path = `${process.env.API_URL}/artist/${artistId}/albums?limit=100000`;
  const axiosResponse = (
    await axios({
      method: 'get',
      url: path,
    })
  ).data;
  return axiosResponse;
};

const searchTopSongs = async (artistId) => {
  const path = `${process.env.API_URL}/artist/${artistId}/top?limit=5`;
  const axiosResponse = (
    await axios({
      method: 'get',
      url: path,
    })
  ).data;
  return axiosResponse;
};

module.exports = {
  searchArtistOrSongs,
  getIndexFromUrl,
  searchArtistInfo,
  searchArtistAlbums,
  searchTopSongs,
};
