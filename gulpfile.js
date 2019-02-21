const gulp = require(`gulp`);
const webserver = require(`gulp-webserver`);
const sass = require(`gulp-sass`);
const webpack = require(`webpack-stream`);
const Path = require(`path`);
const del = require('del');
const watch = require(`gulp-watch`);
const { path, serverConfig, webpackConfig } = require(`./config`);//默认去找index.js

//迁移HTML
gulp.task(`copy-html`, () => {
    let { src,dist } = path;
    return gulp.src(src + `/*.html`)
            .pipe( gulp.dest(dist) )
});

//迁移static
gulp.task(`copy-static`, () => {
    let { static,dist } = path;
    return gulp.src(static + `/**/*` )
            .pipe( gulp.dest( dist + `/static`))
});

//迁移sass
gulp.task(`copy-sass`, () => {
    let { src,dist } = path;
    return gulp.src(src + `/stylesheets/**/*.scss` )
            .pipe( sass() )
            .pipe( gulp.dest( dist + `/stylesheets`))
});

//打包js
gulp.task(`pack-js`, () => {
    let { src,dist } = path;
    return gulp.src(src + `/javascripts/**/*` )
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(dist + '/javascripts'))
});
 
//监听html
gulp.task(`watch`, () => {
    let { src, dist } = path;
    gulp.watch( src + `/*.html`, [`copy-html`] );
    gulp.watch( src + `/stylesheets/**/*.scss`, [`copy-sass`] );
    gulp.watch( src + `/javascripts/**/*`, [`pack-js`] );
    watch( src + `/static/**/*` , v => {
        if ( v.event === 'unlink' ) { // 如果是删除文件
            console.log(`删除文件`);
            
            // 将dist/static中的对应文件也删掉
            let _path = Path.resolve(dist + '/static/', v.path.split('\\static\\')[1])
            del(_path) // 删除
        } else {
            console.log(`添加文件`);
            
            gulp.start(['copy-static']) // 执行复制静态文件的任务
        }
    } );
});

//服务器
gulp.task( `webserver`, () => {
    let { dist } = path;
    return gulp.src(dist)
            .pipe(webserver(serverConfig))
})

gulp.task(`default`, [`copy-sass`,`copy-html`,`copy-static`,`watch`,`webserver`,`pack-js`])