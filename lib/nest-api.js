// Generated by CoffeeScript 1.6.3
var NestApi;

NestApi = (function() {
  NestApi.prototype.username = null;

  NestApi.prototype.password = null;

  NestApi.prototype.session = {};

  function NestApi(username, password) {
    this.username = username != null ? username : null;
    this.password = password != null ? password : null;
  }

  NestApi.prototype.setUsername = function(username) {
    return this.username = username;
  };

  NestApi.prototype.setPassword = function(password) {
    return this.password = password;
  };

  NestApi.prototype.login = function() {};

  return NestApi;

})();

module.exports = NestApi;

/*
//@ sourceMappingURL=nest-api.map
*/