'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Beer Schema
 */
var BeerSchema = new Schema({
  name: String,
  image: String,
  brewery: {
    name: String,
    area: [],
    country: String
  },
  barcodes: [],
  glassware: [],
  calories: Number,
  abv: Number,
  style: String,
  description: String
});

/**
 * Validations
 */
/*ThingSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');*/

mongoose.model('Beer', BeerSchema);
