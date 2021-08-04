module.exports = {
    mutipleMongooseArrayObject : function (mutipleObjects)
    {
        return mutipleObjects.map(mutipleObject => mutipleObject.toObject());
    },
    mongooseArrayObject : function (Object)
    {
        return Object ? Object.toObject() : Object
    }
}