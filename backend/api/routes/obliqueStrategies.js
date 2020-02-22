const express = require('express');
const router = express.Router();
const edition1 = require('../../strategies/edition-1.json');
const edition2 = require('../../strategies/edition-2.json');
const edition3 = require('../../strategies/edition-3.json');
const edition4 = require('../../strategies/edition-4.json');
const edition5 = require('../../strategies/edition-5.json');

router.get('/all', (req, res, next) => {
  try {
    let all = {
      ...{ edition1 },
      ...{ edition2 },
      ...{ edition3 },
      ...{ edition4 },
      ...{ edition5 }
    };
    res.status(200).send(all);
  } catch (error) {
    console.log(error);
  }
});

router.get('/random', (req, res) => {
  try {
    // pick random edition
    let array = [edition1, edition2, edition3, edition4, edition5];
    let randomEdition = array[(Math.random() * array.length) | 0];

    // pick random strategy from it
    let randomStrategy =
      randomEdition.strategies[
        (Math.random() * randomEdition.strategies.length) | 0
      ];

    res.status(200).send({ randomStrategy });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
