const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  // hash the password using argon2 then call next()
    try {
        const hashedPassword = await argon2.hash(req.body.password, {
            y: 2,
            m: 15360,
            t: 2,
            p: 1
        });
        console.log(hashedPassword);
        req.body.hashedPassword = hashedPassword;
        delete req.body.password;
        next();
   } catch (err) {
        console.log(err);
   }
};

module.exports = {
  hashPassword,
};