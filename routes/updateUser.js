const Models = require('../models');
const User = Models.User;

module.exports = app => {
  app.post('/updateUser', (req, res, next) => {
    console.log(JSON.stringify(req.body))
    User.findOne({
      where: {
        id: req.body.userId,
      },
    }).then(userInfo => {
      if (userInfo !== null) {
        console.log('user found in db');
        userInfo
          .update({
            shot: req.body.profile.shot,
            skillLevel: req.body.profile.skillLevel,
            notice: req.body.profile.notice,
            avatar: req.body.profile.avatar
          })
          .then(() => {
            console.log('user updated');
            res.status(200).send({
              auth: true,
              message: 'user updated'
            });
          });
      } else {
        console.error('no user exists in db to update');
        res.status(401).send('no user exists in db to update');
      }
    });
  });
};