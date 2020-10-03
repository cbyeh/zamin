const router = require('express').Router();
const { Listing } = require('../models/listing');
const multer = require('multer');
const S3 = require('aws-sdk/clients/s3');

//=================================
//            Listing
//=================================

/** Upload images to AWS. Uploads a single file for now */
router.route('/upload').post((req, res) => {
  const file = req.file;
  let bucket = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
  });

  var params = {
    ACL: 'public-read',
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  bucket.upload(params, function (err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      // TODO:
    }
  });
});

/** Read all */
router.route('/').get((req, res) => {
  Listing.find()
    .then((listings) => res.json(listings))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

/** Create */
router.route('/add').post((req, res) => {
  const owner = req.body.owner;
  const geolocation = req.body.geolocation;
  const headline = req.body.headline;
  const description = req.body.description;
  const address = req.body.address;
  const date = req.body.date;
  const pictures = req.body.pictures;

  const newListing = new Listing({
    owner,
    geolocation,
    headline,
    description,
    address,
    date,
    pictures,
  });

  newListing
    .save()
    .then(() => res.json('Listing added'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

/** Read by ID */
router.route('/:id').get((req, res) => {
  Listing.findById(req.params.id)
    .then((listing) => res.json(listing))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

/** Delete by ID */
router.route('/:id').delete((req, res) => {
  Listing.findByIdAndDelete(req.params.id)
    .then(() => res.json('Listing deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

/** Update by ID */
router.route('/update/:id').post((req, res) => {
  Listing.findById(req.params.id)
    .then((listing) => {
      // Change every field entered,
      // except Date which is kept as first created date for now
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
