module.exports = function () {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.gulp.dest('build/static/img/'));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.glp.tinypng('N6HF4DCQD8CH32rIBVk9hACMNc22923Q'))
        .pipe($.gulp.dest('build/static/img/'));
    });
};