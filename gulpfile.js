var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    cssnano      = require('gulp-cssnano'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssimport    = require("gulp-cssimport"),
    connect      = require('gulp-connect');

// Register main tasks
// ----------------------------------------------------

gulp.task('default', ['connect', 'watch']);
gulp.task('build', ['build:sass']);

// Create server & watch changes
// ----------------------------------------------------

gulp.task('connect', function(){
    connect.server({
        root      : './',
        livereload: true,
        port      : 6060
    });
});

gulp.task('watch', function(){
    gulp.watch('./css/*.scss', ['compile:sass']);
    gulp.watch('./js/main.bundle.js', ['refresh:bundle-js']);
    gulp.watch('./index.html', ['refresh:index-html']);
});

// Compile styles
// ----------------------------------------------------

gulp.task('compile:sass', function(){
    gulp.src('./css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

gulp.task('build:sass', function(){
    gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssimport())
        .pipe(cssnano())
        .pipe(gulp.dest('./css'));
});

// Reload
// ----------------------------------------------------

gulp.task('refresh:bundle-js', function(){
    gulp.src('./js/main.bundle.js')
        .pipe(connect.reload());
});

gulp.task('refresh:index-html', function(){
    gulp.src('./index.html')
        .pipe(connect.reload());
});

// ----------------------------------------------------