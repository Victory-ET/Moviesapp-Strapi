'use strict';

/**
 * moviesapp service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::moviesapp.moviesapp');
