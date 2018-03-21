// Minify images

/*var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
 
gulp.task('compress-image', function() {
    return gulp.src('./zdjecia_na_strone/Szafy/*.jpg')
        .pipe(imagemin({ progressive: true, optimizationLevel: 10 }))
        .pipe(gulp.dest('./zdjecia_min/Szafy'));
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

/*var gulp = require('gulp');
var rename = require('gulp-rename');
var imagesConvert = require('gulp-images-convert');
 
gulp.task('convert', function () {
  return gulp.src('./zdjecia_min/kuchnie/*.jpg')
      .pipe(imagesConvert({targetType: '.png'}))
      .pipe(rename({extname: ".png"}))
      .pipe(gulp.dest('./zdjecia_min/kuchnie2'));
})*/




