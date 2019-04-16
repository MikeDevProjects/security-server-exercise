const bcrypt = require('bcrypt-nodejs');

bcrypt.hash("soup", null, null, function(err, hash) {
  console.log(hash);
});

bcrypt.compare("soup", "$2a$10$iNdmD.eviiEZkx5A.NwOGe.oGfbBXvMGy015nVkCMFxw2q1P5XQ9y", function(err, res) {
   console.log(res);
});

bcrypt.compare("Soup", "$2a$10$iNdmD.eviiEZkx5A.NwOGe.oGfbBXvMGy015nVkCMFxw2q1P5XQ9y", function(err, res) {
  console.log(res);
});