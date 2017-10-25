var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
 
gulp.task('compress-image', function() {
    return gulp.src('./images/*.jpg')
        .pipe(imagemin({ progressive: true, optimizationLevel: 7 }))
        .pipe(gulp.dest('./images_min'));
});