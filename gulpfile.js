/*variables*/
var gulp 				 = require('gulp'),
		browserSynk  = require('browser-sync'),
		babel 			 = require('gulp-babel');
/*browser sync*/
gulp.task('browser-sync', function() {
	browserSynk({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});
/*babel*/
gulp.task('babel', () =>
    gulp.src('app/js/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/babel'))
);
/*watch*/
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/*.html', browserSynk.reload);
	gulp.watch('app/js/script.js', ['babel']);
	gulp.watch('app/js/**/*.js', browserSynk.reload);
});
/*default*/
gulp.task('default', ['watch']);