const config = {

    // Main Website Settings
    port: "3000",
    domain: "https://jonahcodes.com",

    /*

    If using MySQL you may un-comment this

    mysql: {
        host: "localhost",
        user: "root",
        password: "",
        database: "dbname"
    },

    */

    // Cool Customisable Stuffs
    logourl: "https://hyperz.dev/images/logo.png",
    redirects: [
        { name: `hyperz`, link: `https://hyperz.dev/discord` }
    ],

    // Just for a little watermark lolz
    ogAuthor: "Hyperz#0001"

}

module.exports = config;