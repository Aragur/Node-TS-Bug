const { dest } = require('gulp'),
    ts = require('gulp-typescript');

function compileTypeScript() {
    const tsProject = ts.createProject('tsconfig.json');
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(dest('./dist/'));
}

exports.build = compileTypeScript;