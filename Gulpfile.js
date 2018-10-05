let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
  // Folder with files to minify
  return gulp.src('styles/*.css')
     //I define compatibility with IE 8
    .pipe(cleanCSS({compatibility: 'ie8'}))
    //I define the destination of the minified files
    .pipe(gulp.dest('dist'));
});

//We create a 'default' task that will run when we run `gulp` in the project
gulp.task('default', function() {
// We use `gulp.run` to run the tasks
// And we use `gulp.watch` for Gulp to expect changes in the files to run again
  gulp.run('minify-css');
  gulp.watch('./styles/*.css', function(evt) {
  gulp.run('minify-css');
  });
});
