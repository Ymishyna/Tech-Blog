const withAuth = (req, res, next) => {
    // If the user is not signedin, redirect the request to the signin route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  