let gulp = require("gulp"),
    typedoc = require("gulp-typedoc"),
    args = require("yargs").argv,
    chalk = require("chalk");

let env;

if (!args.env || typeof args.env !== "string") {
    env = "dev";
} else {
    env = args.env;
}

let createDocs = function() {
    if (env === 'dev') {
        gulp.src(["./../src/app/**/*.ts", "!../node_modules/**", "!**/*.d.ts", "!./../src/app/**/*.spec.ts"])
            .pipe(typedoc({
                module: "commonjs",
                target: "es6",
                out: "./../dist/docs/",
                name: "Project Name",
                ignoreCompilerErrors: true,
                includeDeclarations: false,
                hideGenerator: true,
                verbose: true,
                exclude: ["**/index.ts", "**/*.routes.ts", "**/*.module.ts"],
                externalPattern: "../node_modules/**",
                experimentalDecorators: true,
                excludeExternals: true,
                baseUrl: "../src",
                paths: {
                    "@app/*": ["app/*"],
                    "@env/*": ["environments/*"]
                }
            }));
    } else {
        console.log(chalk.blue("[INFO]: Skipping documentation for production build"));
    }
}
gulp.task("default", function() {
    createDocs();
});