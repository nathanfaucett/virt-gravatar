var virt = require("virt"),
    virtDOM = require("virt-dom"),
    Gravatar = require("../../src/index");


process.env.NODE_ENV = "development";


virtDOM.render(virt.createView(Gravatar, {
    email: ""
}), document.getElementById("app"));
