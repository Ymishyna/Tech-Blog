const withAuth = (req, res, next) => {
  // If the user is not signedin, redirect the request to the signin route
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
