var virt = require("virt"),
    propTypes = require("prop_types"),
    environment = require("environment"),
    md5 = require("md5");


var gravatarUrl = "https://secure.gravatar.com/avatar/",
    isRetina = (environment.window.devicePixelRatio || 1) > 1,
    GravatarPrototype;


module.exports = Gravatar;


function Gravatar(props, children, context) {
    virt.Component.call(this, props, children, context);
}
virt.Component.extend(Gravatar, "virt.Gravatar");
GravatarPrototype = Gravatar.prototype;

Gravatar.propTypes = {
    size: propTypes.number.isRequired,
    rating: propTypes.string.isRequired,
    defaults: propTypes.string.isRequired,
    email: propTypes.string.isRequired
};

Gravatar.defaultProps = {
    size: 50,
    rating: "g",
    defaults: "retro"
};

GravatarPrototype.render = function() {
    var props = this.props,
        size = props.size,
        query = (
            "s=" + (isRetina ? size * 2 : size) + "&" +
            "r=" + props.rating + "&" +
            "d=" + props.defaults
        ),
        src = gravatarUrl + md5(props.email) + "?" + query;

    return (
        virt.createView("img", {
            className: "virt.Gravatar",
            src: src,
            alt: props.email,
            width: props.size,
            height: props.size
        })
    );
};
