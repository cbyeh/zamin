const router = require('express').Router();
const { Listing } = require('../models/listing');

router.route('/').get((req, res) => {
  Listing.find()
    .then((listings) => res.json(listings))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// FULL CRUD

router.route('/add').post((req, res) => {
  const owner = req.body.owner;
  const geolocation = req.body.geolocation;
  const headline = req.body.headline;
  const description = req.body.description;
  const address = req.body.address;
  const date = req.body.date;

  const newListing = new Listing({
    owner,
    geolocation,
    headline,
    description,
    address,
    date,
  });

  newListing
    .save()
    .then(() => res.json('Listing added'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Listing.findById(req.params.id)
    .then((listing) => res.json(listing))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Listing.findByIdAndDelete(req.params.id)
    .then(() => res.json('Listing deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Listing.findById(req.params.id)
    .then((listing) => {
      // Change every field entered, except Date which is kept the same for now
      listing.owner = req.body.owner;
      listing.geolocation = req.body.geolocation;
      listing.headline = req.body.headline;
      listing.description = req.body.description;
      listing.address = req.body.address;

      listing
        .save()
        .then(() => res.json('Listing edited'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
