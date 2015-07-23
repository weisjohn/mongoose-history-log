
module.exports = function(schema) {

    // what happened when
    schema.add({
        history : [{
            _id : false,
            time: { type: Date, default: Date.now },
            status: String,
            meta: {}
        }]
    });

    // rudimentary default
    schema.pre('validate', function(next) {
        if (!this.history || !this.history.length)
            this.history = [{ status: 'created' }];
        next();
    });

}