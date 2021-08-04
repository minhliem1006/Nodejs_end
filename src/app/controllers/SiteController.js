class SiteController
{
    home(req,res,next)
    {
        res.render('home');
    }
    news(req,res,next)
    {
        res.render('news');
    }
    search(req,res,next)
    {
        res.render('search');
    }


}
module.exports = new SiteController;