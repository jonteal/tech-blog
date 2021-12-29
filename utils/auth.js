const withAuth = (req, res, next) => {
    // IF THE USER IS NOT LOGGED IN, REDIRECT THE REQUEST TO THE LOGIN ROUTE
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

// EXPORT withAuth
module.exports = withAuth;