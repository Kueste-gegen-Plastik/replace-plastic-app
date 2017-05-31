try {
    var config = require('./env.' + (process.env.NODE_ENV ? process.env.NODE_ENV : 'example') + '.js');
} catch(err) {
    console.error("REPLACEPLASTIC: ++++ PLEASE PROVIDE A env.<environment>.js FILE IN src/config. USING env.example.js AS A FALLBACK +++");
    var config = require('./env.example.js');
}
export default config;
