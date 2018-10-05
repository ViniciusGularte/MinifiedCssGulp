let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
     // Folder with files to minify
     return gulp.src('styles/*.css')
     //The method pipe() allow you to chain multiple tasks together 
     //I execute the task to minify the files
    .pipe(cleanCSS())
    //I define the destination of the minified files with the method dest
    .pipe(gulp.dest('dist'));
});

//We create a 'default' task that will run when we run `gulp` in the project
gulp.task('default', function() {
// We use `gulp.watch` for Gulp to expect changes in the files to run again
  gulp.watch('./styles/*.css', function(evt) {
  gulp.task('minify-css');
  });
});

