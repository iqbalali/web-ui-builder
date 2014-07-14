//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        // Task configuration
       
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        sass: {                                 // task
            dist: {                             // target
                files: {                        // dictionary of files
                    'css/style.css': 'sass/style.scss'     // 'destination': 'source'
                }
            }
        },
        svgstore: {
          options: {
             prefix : 'icon-', // This will prefix each ID
             svg: { // will be added as attributes to the resulting SVG
                viewBox : '0 0 100 100'
             }
          },
          default : {
          files: {
            'svg/svg-defs.svg': ['svg/*.svg'],
          },
        },
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            svg: {
                files: '**/*.svg',
                tasks: ['svgstore']
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgstore');
    
    //grunt.loadNpmTasks('grunt-contrib-concat');
    // Task  ffra
    grunt.registerTask('default', ['sass']);
};
