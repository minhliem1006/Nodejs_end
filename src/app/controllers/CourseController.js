const Item = require('../models/Item');
const {mutipleMongooseArrayObject,mongooseArrayObject} = require ('../../util/mongoose');
class CourseController
{
    //[GET] /courses
    show(req,res,next)
    {
        Item.find({})
            .then(items =>{

                res.render('courses',{
                    items : mutipleMongooseArrayObject(items),
                });
            })
            .catch(err=> next(err))
        
    }
    //[GET] /courses/:slug
    slug(req,res,next)
    {
        Item.findOne({ slug: req.params.slug })
            .then(item => {
                res.render('courses/courseDetail',{
                    item : mongooseArrayObject(item)
                });
            })
            .catch(err => next(err))        
        
    }
     //[GET] /courses/create
    createCourse(req,res,next)
    {
        res.render('courses/createCourse');
        
    }
    //[Post] /courses
    stored(req,res,next)
    {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const item = new Item(req.body);
        item.save()
        .then(() => res.redirect(`/courses`))
        .catch(err => next(err));
    }
}
module.exports = new CourseController;