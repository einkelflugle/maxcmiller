module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 8080
                }
            }
        },

        uglify: {
            build: {
                src: ['javascripts/libs/*.js', 'javascripts/src/script.js'],
                dest: 'javascripts/build/script.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'stylesheets/src',
                    cssDir: 'stylesheets/build',
                    environment: 'production'
                }
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['stylesheets/src/screen.scss', 'stylesheets/src/partials/*.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            },
            javascript: {
                files: ['javascripts/src', 'javascripts/libs'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['uglify', 'compass']);
    grunt.registerTask('serve', ['connect:server', 'watch']);

};