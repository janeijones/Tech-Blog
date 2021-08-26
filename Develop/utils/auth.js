const withAuth = (req, res, next) => { //checks session, if not logged in, redirects to login page
    if (!req.session.loggedIn) {
      res.redirect('/login')
    } else {
      next();
    }
  };
    
  module.exports = withAuth
  