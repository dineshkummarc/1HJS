One Hour JavaScript (1HJS)
=========================
I never end my side projects. After a few hours having fun, I get tired/distracted and I never get back to it.

To fight that bad habit, I'm trying one hour long side projects. There's no way I can't finish them, now.

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

If `sub` or `property` then return me `undefined`, it's fine. In this example, I don't test if `obj == null` but you get the thing.

I'm not a fan of built-in types augmentation so I use a wrapper function:

    var prop = _(obj).get('sub.property');
    if(prop){
        //do something
    }

And now the null check on `obj` is done for me!

That's what this tiny library is about.

License
=======
[MIT](/floriancargoet/1HJS-getDeep/blob/master/LICENSE)