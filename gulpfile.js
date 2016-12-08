var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
// var sass = require('gulp-sass');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
gulp.task('nodemon',function(ab){
	var ft = false;
	return nodemon({
		script:'./app.js'
	}).on('start',function(){
		if(!ft){
			ab();
			ft = true
		}
	})
})
gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:9999'
		},
		files:['*'],
		port:9888,
		open:false
	})
})
gulp.task('stylus',function(){
	//一个:gulp.src('styl1');
	//多个：gulp.src(['styl1','styl2']);
	//一个目录下所有（不包含子目录）：gulp.src('stylus/*.styl1')
	//一个目录下所有（包含子目录）：gulp.src('stylus/**/*.styl1');
	// console.log('this is gulp')
	return gulp.src('./stylus/**/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public/css'))
})
gulp.task('minifycss',function(){
	return gulp.src('./public/css/**/*.css')
	.pipe(minifycss())
	.pipe(gulp.dest('./public/minicss'))
})
gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./public/minijs'))
}


gulp.task('watcher',['browserSync','stylus','uglify'],function(){

	// browserSync.init({
 //        server: "./views"
 //    });
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./public/js/**/*.js',['uglify']);

	gulp.watch(['./public/css/**/*.css','./public/minijs/**/*.js']).on('change',function(){
		reload();
	})
})