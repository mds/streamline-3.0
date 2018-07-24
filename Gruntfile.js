module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/_scripts/<%= pkg.name %>.js',
    //     dest: 'build/_scripts/<%= pkg.name %>.min.js'
    //   }
    // },

    svgstore: {
      options: {
        prefix : 'icon-',
        svg: {
          style: 'display: none;',
          id: 'target'
        }
      },
      default : {
        files: {
          'build/_assets/img/icons/giant-icon-sprite.svg': ['src/_assets/img/svg/*.svg']
        },
      },
    }

  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-svgstore');

  // Default task(s).
  grunt.registerTask('default', ['svgstore']);

};
