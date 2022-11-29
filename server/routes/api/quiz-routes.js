const router = require('express').Router()

const {
    getAllReviews
} = require('../../controllers/quiz-controller')

router.route('/').get(getAllReviews)

module.exports = router;