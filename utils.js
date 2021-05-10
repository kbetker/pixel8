const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const notFound = asyncHandler(async (req, res, next) =>{
    res.render('404');
})

module.exports = {
    csrfProtection,
    asyncHandler,
    notFound
};
