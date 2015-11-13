/**
 * CONFIG
 **/
var profile = "DEV"; // DEV / PROD
process.argv.forEach(function(arg) {
	if (arg == "PROD" ||  arg == "DEV") {
		profile = arg;
	}
});

var config = {
	ttlToken: 7200, //1h
	debug: profile == "DEV" ? true : false,
	salt: "ANY//STRING//I//USUALLY//GO//FOR//30//CHARS",
	rootDirectory: __dirname,
	server: { 
		address: profile == "DEV" ? 'localhost' : 'XXX.XXX.XXX.XXX', //YOUR SERVER IP
		port: profile == "DEV" ? '8080' : '80'
	},
	storageDirectory: __dirname + "/data",
	profile: profile
};

// Video properties
config.thumbnailsDirectory = config.storageDirectory + "/thumbnails";
config.tmpDirectory = config.storageDirectory + "/.tmp";
config.thumbnailsSize = "300x?"; //Eg: 300x300, 300x?, ?x300
config.picturesDirectory = config.storageDirectory + "/pictures";

// oAuth properties
config.oauth = {
	google: {
		clientId: "GOOGLE//CLIENT//ID",
		clientSecret: "GOOGLE//CLIENT//SECRET"
	},
	facebook: {
		clientId: "FACEBOOK//CLIENT//ID",
		clientSecret: "FACEBOOK//CLIENT//SECRET"
	}
};

exports.config = config;