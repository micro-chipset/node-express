const { Router } = require('express')
const router = Router();

router.use('/', (req, res) => {
    res.render('courses', {
        title: 'Курсы',
        isCourses: true
    })
})

module.exports = router;
