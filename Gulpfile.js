let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
// Tarefa para minificar css utilizando pacote cleanCSs
gulp.task('minify-css', () => {
  //Pasta com arquivos para minificar
  return gulp.src('styles/*.css')
     //Defino compatibilidade com IE 8
    .pipe(cleanCSS({compatibility: 'ie8'}))
    //Defino o destino dos arquivos minificados
    .pipe(gulp.dest('dist'));
});

//Criamos uma tarefa 'default' que vai rodar quando rodamos `gulp` no projeto
gulp.task('default', function() {
// Usamos o `gulp.run` para rodar as tarefas
// E usamos o `gulp.watch` para o Gulp esperar mudanças nos arquivos para rodar novamente
  gulp.run('minify-css');
  gulp.watch('./styles/*.css', function(evt) {
  gulp.run('minify-css');
  });
});
