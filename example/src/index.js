var virt = require("@nathanfaucett/virt"),
    virtDOM = require("@nathanfaucett/virt-dom"),
    Gravatar = require("../../src/index");


process.env.NODE_ENV = "development";


virtDOM.render(virt.createView(Gravatar, {
    email: ""
}), document.getElementById("app"));
