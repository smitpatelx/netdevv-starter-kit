const gulp = require('gulp');
const chalkAnimation = require('chalk-animation');

const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
var uglify2 = require('gulp-uglify-es').default;
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const pump = require('pump');
const sass = require('gulp-sass');  //npm install gulp-sass --save-dev


// PATHS JS Libraries
var styleSrc = 'src/styles/**/*.sass',
    styleDist = 'dist/styles/',
    viewsSrc = 'src/views/**',
    viewDist = 'dist/',
    vendorsSrc = 'src/scripts/vendors/**',
    vendorsDist = 'dist/scripts/vendors/',
    scriptSrc = 'src/scripts/*.js',
    srciptDist = 'dist/scripts/';

var consoleLogComp ='Process Completed .... \n Distribution Version:@gulp-netdevv-development \n Contact: https://www.netdevv.com \n Starter-Kit: http://starterkit.netdevv.com';
// Logs Message
gulp.task('message', function () {
    return console.log('Beast is running.......');
});

// Copy All HTML files
gulp.task('view', function () {
    gulp.src(viewsSrc)
        .pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task('sass', function () {
    gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/styles/'))
        .pipe(browserSync.stream());;
});

// Scripts
gulp.task('script', function () {
    gulp.src([
            'src/scripts/*.js'
        ])
        .pipe(concat('main.js'))
        .pipe(uglify2())
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(browserSync.stream());
});

//Concat and Compress Vendor .js files
gulp.task('vendors', function () {
    gulp.src(
        [
        'src/scripts/vendors/jquery.min.js',
        'src/scripts/vendors/*.js'            
        ])
        .pipe(concat('vendors.js'))
        .pipe(uglify2())
        .pipe(gulp.dest(vendorsDist))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('watch', function () {

    browserSync.init({
        server: { baseDir: "./dist/" },
        port: 5050, //you can change port here
        ui: { port: 5051 }, //both ports should be different
        notify: false
    });

    gulp.watch(styleSrc, ['sass']);
    gulp.watch(vendorsSrc, ['vendors']);
    gulp.watch(scriptSrc, ['script']);
    gulp.watch(viewsSrc, ['view']);
    gulp.watch('./dist/**').on('change', browserSync.reload);
});

gulp.task('serve', ['message','sass', 'script', 'vendors', 'watch'], function () { });

// gulp.task('build', [ 'view', 'sass', 'vendors', 'script']);

/* Animating Terminal */
var rainbow = chalkAnimation.rainbow(consoleLogComp); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 10000);

setTimeout(() => {
    rainbow.start(); // Animation stops
}, 100);
