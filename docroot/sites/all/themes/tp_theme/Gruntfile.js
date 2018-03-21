module.exports = function(grunt) {


  // Config.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./js/src/*.js', '!./js/script.gen.js'],
         tasks: ['jshint', 'concat:tp_boilerplate']
        //  tasks: [ 'concat:tp_boilerplate']
      },
      sass: {
          files: [ 'sass/**/*.scss' ],
          tasks: [ 'wellington:dist','replace:strip_comments', 'postcss' ]
      }
    },
    concat: {
      tp_boilerplate: {
        src: './js/src/**/*.js',
        dest: './js/build/script.gen.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporterOutput: ""
      },
      all: ['js/src/*.js', '!js/build/script.gen.js']
    },
    wellington: {
        dist: {
            src: [
                'sass/**/*.scss',   // Build all .scss files
                '!sass/**/_*.scss'  // Don't build files starting with "_" into css files
            ],
            options: {
                comment:'map',
                style: 'expanded',      // The style of output to be used.
                p: 'sass',       // The base folder that contains the sass.
                b: 'css',  // The output folder for the built css.
                d: 'images',    // The input image folder
                gen: 'build/im',  // The output folder for the generated sprite files.
                s: 'expanded'      // The style of output to be used.
            }
        }
    },
    postcss: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          //   require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: [
            'last 6 versions',
            'ie 9'
          ]}) // add vendor prefixes
          //  require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: './css/*.css'
      }
    },
    replace: {
      strip_comments: {
        src: ['css/*.css'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: /\/Users\/(.*)\/techdata2016\/docroot\/sites\/all\/themes\/tp_theme/g,
          to: ""
        },{
          from: /\/Users\/(.*)\/Development\/sites\/techdata2016\/docroot\/sites\/all\/themes\/tp_theme/g,
          to: ""
        }]
      }
    }

  });

  // Load the tasks...
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-wellington');
  grunt.loadNpmTasks('grunt-text-replace');
  // Default task.
  grunt.registerTask('default', 'watch');
}
