const gulp = require('gulp');
const chalkAnimation = require('chalk-animation');

const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');  //npm install gulp-sass --save-dev

var consoleLogComp ='Process Completed .... \n Distribution Version:@gulp-netdevv-development \n Contact: https://www.netdevv.com';
// Logs Message
gulp.task('message', function () {
    return console.log('Beast is running.......');
});

// Copy All HTML files
gulp.task('view', function () {
    gulp.src('src/views/*.html')
        .pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task('sass', function () {
    gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/styles/'))
        .pipe(browserSync.stream());
});

// Scripts
gulp.task('script', function () {
    gulp.src(['src/scripts/vendors/jquery/**.js', 'src/scripts/vendors/foundation/**.js', 'src/scripts/vendors/splitting/**.js', 'src/scripts/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(browserSync.stream());
});

gulp.task('sass-watch', function () {
    gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('script-watch', function () {
    gulp.watch('./src/scripts/**/*.js', ['script']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: { baseDir: "./dist/" },
        port: 5050,
        ui: { port: 5051 }
        // files: ["./dist/style/main.css", "./dist/scripts/main.js"]
    });

    gulp.watch('./src/scripts/**/*.js', ['script']);
    gulp.watch('./src/styles/**/*', ['sass']);
    gulp.watch('./src/views/*.html', ['view']);
    gulp.watch('./dist/**').on('change', browserSync.reload);
});

gulp.task('build', ['message', 'view', 'sass', 'script', 'serve']);

gulp.task('watch', function () {
    gulp.watch('./src/scripts/**/*.js', ['script']);
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/views/*.html', ['view']);
});

/* Animating Terminal */
var rainbow = chalkAnimation.rainbow(consoleLogComp); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 10000);

setTimeout(() => {
    rainbow.start(); // Animation stops
}, 100);
