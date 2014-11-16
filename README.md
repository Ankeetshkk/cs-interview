cs-interview
============

cs-interview is a mobile-ready, MEAN stack, real time string to colored shape converter. 

  - Type a string into the input field
  - See the colored shapes derived from the string you entered
  - See a total count of all characters input by all users that syncs in real time across clients

### Version
0.0.1

### Tech

cs-interview uses a number of notable open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Mongodb] - the database
* [Mongoose] - the database object modeler
* [Grunt] - the streaming build system
* [Karma] - the testing framework
* [jshint] - the code quality tool
* [livereload] - the web browser page reloading plugin
* [socket.io] - the fastest and most reliable real-time engine
* Complete lists can be found in ./bower.json and ./package.json

### Installation

```sh
$ git clone git@github.com:alvinycheung/cs-interview.git cs-interview
$ cd cs-interview
$ npm install
$ bower install
```

### Starting The Server
```sh
$ grunt serve
```

### Seed Config
edit `./server/config/seed.js` to stop the database from resetting upon server start

###Sublime Text jsformat Package Settings
```js
{
	// jsformat options
	"format_on_save": true,
	"jsbeautifyrc_files": true
}
```