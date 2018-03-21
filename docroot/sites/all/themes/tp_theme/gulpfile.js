var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect');

var htmlSources = ['html/*.html'],
	jsSources = ['js/src/*.js'],
	sassSources = [
		'sass/*.scss', 
		'sass/*/*.scss'
	]

gulp.task('default', ['sass', 'js', 'connect', 'watch']);

gulp.task('log', function(){
	gutil.log('== My Log Task ==')
});

gulp.task('html', function(){
	gulp.src(htmlSources)
	.pipe(connect.reload())
});

gulp.task('sass', function(){
	gulp.src(sassSources)
	.pipe(sass({outputStyle: 'expanded'})) //
	  .on('error', gutil.log)
	  .on('start', function() { console.log('starting ')})
	  .on('end', function() { console.log('end ')})
	.pipe(gulp.dest('css'))
	.pipe(connect.reload())
});

gulp.task('js', function(){
	gulp.src(jsSources)
	.pipe(uglify())
	.pipe(concat('script.gen.js'))
	.pipe(gulp.dest('js/build'))
	.pipe(connect.reload())
});

gulp.task('watch', function(){
	gulp.watch(jsSources, ['js']);
	gulp.watch(sassSources, ['sass']);
	gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function(){
	connect.server({
		root: '.',
		port:8002,
		livereload: true
	})
});
