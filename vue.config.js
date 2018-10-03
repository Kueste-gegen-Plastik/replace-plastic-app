const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, "./www"),
    baseUrl: './',
    pages: {
        index: {
            entry: 'src/main.js'
        },
        cordova: { 
            entry: process.env.BUILD_OS === 'ios'
                ? './platforms/ios/platform_www/cordova.js'
                : './platforms/android/platform_www/cordova.js'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    },
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/settings.scss'),
            ],
        })
}
