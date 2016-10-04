/*variables*/
var gulp 				 = require('gulp'),
		browserSynk  = require('browser-sync');
/*browser sync*/
gulp.task('browser-sync', function() {
	browserSynk({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});
/*watch*/
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/*.html', browserSynk.reload);
});
/*default*/
gulp.task('default', ['watch']);