if (process.env.NODE_ENV !== "production")
    require("dotenv").config()

const config = {
    databaseURL: process.env.databaseURL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY
};
module.exports = config;