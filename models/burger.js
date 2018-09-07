var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		})
	},
	updateOne: function(id, cb){
		orm.update('burgers',id,cb);
	},
	insertOne: function(name, cb){
		orm.create('burgers', name, cb);
	}
}
module.exports = burger;