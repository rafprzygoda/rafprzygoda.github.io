// Minify images

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
 
gulp.task('compress-image', function() {
    return gulp.src('./images/*.png')
        .pipe(imagemin({ progressive: true, optimizationLevel: 10 }))
        .pipe(gulp.dest('./images_min'));
});


// Minify CSS

/*let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('./*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('style'));
});
*/
