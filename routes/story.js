var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('story', { title: '小故事',memberPhone:req.session.memberPhone ||"Guest" });
});

router.get('/:no', function(req, res, next) {
  res.render('story_no', { title: '個別故事頁面',memberPhone:req.session.memberPhone ||"Guest" });
});
module.exports = router;
