module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      dist: {
        src: [
          'app/js/jquery-3.2.1.min.js',
          'app/js/bootstrap.min.js',
          'app/js/swiper.min.js',
          'app/js/index.js',
        ],
        dest: 'dist/js/index.js'
      }
    },
    uglify: {
      options: {},
      dist: {
        files: {
          'dist/js/index.min.js': 'dist/js/index.js'
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      compress: {
        files: {
          'dist/css/index.min.css': [
            'app/css/bootstrap.min.css',
            'app/css/swiper.css',
            'app/css/index.css',
          ]
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'app/index.html'      // 'destination': 'source'
        }
      },
      dev: {                                       // Another target
        files: {
          'dist/index.html': 'app/index.html'
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/image/', src: '*', dest: 'dist/image/'},
        ],
      },
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'htmlmin', 'copy'])
}
