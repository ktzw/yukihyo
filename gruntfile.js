module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    libDir: "lib",
    testDir: "test",

    watch: {
      build: {
        files: ['<%= libDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
      test: {
        files: ['<%= libDir %>/*.jsx', '<%= testDir %>/*.jsx'],
        tasks: ['jsx:test']
      }
    },

    jsx: {
      build: {
        src:'lib/yukihyo.jsx',
        dest: 'dest/yukihyo.js',
        add_search_path: ['<%= libDir %>'],
        release: true,
        minify: true
      },
      test: {
        src: ['<%= testDir %>/*.jsx'],
        add_search_path: ['<%= libDir %>'],
        test: true
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:test']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
