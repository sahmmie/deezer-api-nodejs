const express = require('express');

const router = express.Router();
const musicRoute = require('./music.route');

const defaultRoutes = [
  {
    path: '/music',
    route: musicRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
