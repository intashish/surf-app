const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res, next) =>{
    res.send("/reviews");
});

/* GET reviews new /posts/:id/reviews/new */
// router.get('/new', (req, res, next) =>{
//     res.send("NEW /reviews/new");
// });

/* GET reviews create /posts/:id/reviews */
router.post('/', (req, res, next) =>{
    res.send("CREATE /reviews");
});

/* GET reviews show /posts/:id/reviews/:review_id */
// router.get('/:review_id', (req, res, next) =>{
//     res.send("SHOW /reviews/:review_id");
// });

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) =>{
    res.send("EDIT /reviews/:review_id/edit");
});

/* GET reviews update /posts/:id/reviews/review_id */
router.put('/:review_id', (req, res, next) =>{
    res.put("UPDATE /reviews/:review_id");
});

/* GET reviews delete /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) =>{
    res.delete("DELETE /reviews/:review_id");
});

module.exports = router;