virt Modal
=======

Gravatars for virt

```javascript
var virt = require("@nathanfaucett/virt"),
    virtDOM = require("@nathanfaucett/virt-dom");,
    Gravatar = require("@nathanfaucett/gravatar");


virt.createView(Gravatar, {
    size: 32,
    rating: "g",
    defaults: "retro",
    email: "nathanfaucett@gmail.com"
});
```
