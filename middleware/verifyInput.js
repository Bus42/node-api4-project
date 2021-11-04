const verifyInput = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      error: "Please enter username and password",
    });
  } else {
    next();
  }
};

module.exports = verifyInput;
