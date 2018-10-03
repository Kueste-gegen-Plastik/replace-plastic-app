let tmpConfig = {};

try {
    tmpConfig = require('./env.' + (process.env.NODE_ENV ? process.env.NODE_ENV : 'example') + '.js');
} catch (err) {
    // console.error("REPLACEPLASTIC: ++++ PLEASE PROVIDE A env.<environment>.js FILE IN src/config. USING env.example.js AS A FALLBACK +++");
    tmpConfig = require('./env.example.js');
}
export const config = tmpConfig.config;
