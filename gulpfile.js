"use strict";
var gulp = require("gulp");
var del = require("del");
var imageResize = require('gulp-image-resize');



/********************************************************
 * DEV ONLY
 ********************************************************/
 /**
  * Resize images
  */
 gulp.task('imageresize', function() {
     return gulp.src('images-raw/**/*')
     .pipe(imageResize({
       width : 1000,
       crop : false,
       upscale : false,
       quality : 1,
       sharpen : true
     }))
     .pipe(gulp.dest('src/assets/image'));
 });
