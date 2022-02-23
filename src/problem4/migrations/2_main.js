const Main = artifacts.require("MainContract");

module.exports = function (deployer) {
  deployer.deploy(Main);
};
