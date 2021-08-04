const Item = require('../models/Item');
const {mutipleMongooseArrayObject,mongooseArrayObject} = require ('../../util/mongoose');
class MeController
{
    //[GET] me/stored-courses
    storedCourse(req,res,next)
    {
        Item.find({})
            .then(item =>{
                res.render('me/stored-courses',{
                    item : mutipleMongooseArrayObject(item),
                });
            })
            .catch(err => next(err));
        
    }
     //[GET] me/:id/edit
    edit(req,res,next)
    {
        Item.findOne({_id:req.params._id})
            .then(item => {
                res.render('courses/editCourse',{
                    item : mongooseArrayObject(item),
                })
            })
            .catch(err =>next(err));
    }
    //[PUT]/me/course-update
    update(req,res,next)
    {
        Item.updateOne({_id:req.params._id},req.body)
            .then(()=> res.redirect('/me/stored-courses'))
            .catch(next);
       
    }
}
module.exports = new MeController;