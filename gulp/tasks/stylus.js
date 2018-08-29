module.exports = function () {
    $.gulp.task('stylus', function () {
        return $.gulp.src('src/static/stylus/main.styl')
            .pipe($.glp.sourcemaps.init())
            .pipe($.glp.stylus({
                'include css':true
            }))
            .pipe($.glp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error",$.glp.notify.onError({
                title: "stile"
            }))
            .pipe($.glp.csso())
            .pipe($.glp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.browserSync.reload({
                stream:true
            }));
    });
}