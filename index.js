var base_path = "/mnt/d/_BEST-PRICE/_NodeJS/";

var server = require(base_path + "server");
var router = require(base_path + "router");
var requestHandlers = require(base_path + "requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);