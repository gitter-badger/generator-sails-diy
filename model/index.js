/**
 * Created by leo on 16-1-5.
 */

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var path = require('path');
var _s = require('underscore.string');
var _ = require('lodash');

var SOURCE_CONTROLLER = 'Controller.js';
var SOURCE_CONTROLLER_TEST = 'Controller.test.js';
var SOURCE_MODEL = 'Model.js';
var SOURCE_MODEL_TEST = 'Model.test.js';
var SOURCE_MODEL_FIXTURE = 'ModelFixture.js';

var DESTINATION_CONTROLLER = function DESTINATION_CONTROLLER(name) {
  return 'api/controllers/' + name + 'Controller.js';
};
var DESTINATION_CONTROLLER_TEST = function DESTINATION_CONTROLLER_TEST(name) {
  return 'test/unit/controllers/' + name + 'Controller.test.js';
};
var DESTINATION_MODEL = function DESTINATION_MODEL(name) {
  return 'api/models/' + name + '.js';
};
var DESTINATION_MODEL_TEST = function DESTINATION_MODEL_TEST(name) {
  return 'test/unit/models/' + name + '.test.js';
};
var DESTINATION_MODEL_FIXTURE = function DESTINATION_MODEL_FIXTURE(name) {
  return 'test/fixtures/' + name + 'Fixture.js';
};


module.exports = generators.Base.extend({


  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument(
      'model-name',
      {
        required: true,
        type: String
      }
    );
    this.option('rest');
    // And you can then access it later on this way; e.g.
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  //prompting: function () {
  //
  //},

  writing: function(){


    console.log(this['model-name']);
    console.log(this.options['rest']);
    var isREST = this.options['rest'];
    var name = (this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1)).replace(/Model/, '');


    if (isREST && !fs.existsSync(this.destinationPath(DESTINATION_CONTROLLER(name)))) {
      this.template(SOURCE_CONTROLLER, DESTINATION_CONTROLLER(name), { name: name });
      this.template(SOURCE_CONTROLLER_TEST, DESTINATION_CONTROLLER_TEST(name), { name: name });
    }

    this.template(SOURCE_MODEL, DESTINATION_MODEL(name), { name: name });
    this.template(SOURCE_MODEL_TEST, DESTINATION_MODEL_TEST(name), { name: name });
    this.template(SOURCE_MODEL_FIXTURE, DESTINATION_MODEL_FIXTURE(name), { name: name });



    //mkdirp.sync(this.destinationPath( path.join( app_name, 'api' ) ));
    //mkdirp.sync(this.destinationPath( path.join( app_name, 'api/controllers' ) ) );
    //mkdirp.sync(this.destinationPath( path.join( app_name, 'api/models' ) ) );
    //mkdirp.sync(this.destinationPath( path.join( app_name, 'api/policies' ) ) );
    //mkdirp.sync(this.destinationPath( path.join( app_name, 'api/services' ) ) );
    //mkdirp.sync(this.destinationPath( path.join( app_name, 'config' ) ) );
    //
    //this.fs.copy(
    //  this.templatePath('_lib/_app.js'),
    //  this.destinationPath(path.join(app_name, 'lib/app.js'))
    //);
    //
    //this.fs.copy(
    //  this.templatePath('_lib/_sails/_loadControllers.js'),
    //  this.destinationPath(path.join(app_name, 'lib/sails/_loadControllers.js'))
    //);
    //
    //this.fs.copy(
    //  this.templatePath('_lib/_sails/_loadPolicies.js'),
    //  this.destinationPath(path.join(app_name, 'lib/sails/_loadPolicies.js'))
    //);
    //
    //this.fs.copyTpl(
    //  this.templatePath('_test/_basic.js'),
    //  this.destinationPath(path.join(app_name, 'test/basic.js')),
    //  this.props
    //);
  },

  install: function () {
    // Go to correct directory
    //process.chdir( app_name );
    //this.installDependencies();
  }
});
