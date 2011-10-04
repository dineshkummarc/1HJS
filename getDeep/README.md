getDeep
=======
I'm tired of that kind of code:

    if(obj && obj.sub && obj.sub.property){
        //do something
    }

I'd like to write something like:

    var prop = obj.get('sub.property');
    if(prop){
        //do something
    }

If `sub` or `property` is `undefined`, then return me `undefined`, it's fine. In this example, I don't test if `obj == null` but you get the thing.

I'm not a fan of built-in types augmentation so I use a wrapper function:

    var prop = _(obj).get('sub.property');
    if(prop){
        //do something
    }

And now the null check on `obj` is done for me!

That's what this tiny library is about. Docs, code and tests (in that order) in one small hour.

License
=======
[MIT](/floriancargoet/1HJS/blob/master/LICENSE)