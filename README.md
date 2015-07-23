# mongoose-history-log

add a collection of events to a schema


### usage

schema setup:

```javascript
var mongoose = require('mongoose');
var mhl = require('mongoose-history-log');

var schema = new mongoose.Schema({ name: String });

mhl(schema);
```

This adds a `history` property to the schema which is an array of objects:

```javascript
[{
    time: { type: Date, default: Date.now },
    status: String,
    meta: {}
}]
```

The `meta` property allows you to attach an arbitrartily complex object onto the `history` element. When saving the document for the first time, it will automatically add an `{ status : "created" }` record with the current time.

Adding other events:

```javascript
var user = mongoosel.model('user');

user.findOne({ email : 'test@example.net' }, function(err, doc) {
    doc.history.push({ status: "foo" });
    doc.save();
})
```
