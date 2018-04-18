var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
  srcPath: 'src/',
  devPath: 'build/',
  prdPath: 'dist/'
};

gulp.task('lib', function() { // 将bower_components下面的文件拷贝到build和dist目录
  gulp.src('bower_components/**/*.js')
  .pipe(gulp.dest(app.devPath + 'vendor'))
  .pipe(gulp.dest(app.prdPath + 'vendor'))
  .pipe($.connect.reload()); // reload会在文件改动后刷新浏览器
});

gulp.task('html', function() { // 将src目录下所有的html文件拷贝到build和dist目录
  gulp.src(app.srcPath + '**/*.html')
  .pipe(gulp.dest(app.devPath))
  .pipe(gulp.dest(app.prdPath))
  .pipe($.connect.reload());
})


gulp.task('json', function() { // 将json文件打包到build和dist目录的data文件夹
  gulp.src(app.srcPath + 'data/**/*.json')
  .pipe(gulp.dest(app.devPath + 'data'))
  .pipe(gulp.dest(app.prdPath + 'data'))
  .pipe($.connect.reload());
});

gulp.task('less', function() { // 将less文件打包到build和dist目录的css
  gulp.src(app.srcPath + 'style/index.less')
  .pipe($.plumber())
  .pipe($.less())
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});

gulp.task('js', function() { // 将script目录文件打包到build和dist的js目录，dist中是压缩的。
  gulp.src(app.srcPath + 'script/**/*.js')
  .pipe($.plumber())
  .pipe($.concat('index.js'))
  .pipe(gulp.dest(app.devPath + 'js'))
  .pipe($.uglify())
  .pipe(gulp.dest(app.prdPath + 'js'))
  .pipe($.connect.reload());
});

gulp.task('image', function() {
  gulp.src(app.srcPath + 'image/**/*')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'image'))
  .pipe($.imagemin())
  .pipe(gulp.dest(app.prdPath + 'image'))
  .pipe($.connect.reload());
});

gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json']);

gulp.task('clean', function() { // 清除dist和build目录
  gulp.src([app.devPath, app.prdPath])
  .pipe($.clean());
});

gulp.task('serve', ['build'], function() {
  $.connect.server({
    root: [app.devPath],
    livereload: true,
    port: 3000
  });

  open('http://localhost:3000');

  gulp.watch('bower_components/**/*', ['lib']);
  gulp.watch(app.srcPath + '**/*.html', ['html']);
  gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
  gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
  gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
  gulp.watch(app.srcPath + 'image/**/*', ['image']);
});

gulp.task('default', ['serve']); // 将gulp映射为gulp server
