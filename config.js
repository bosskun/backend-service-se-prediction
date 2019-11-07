const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://se_auth:se_2019@cluster0-mtjth.mongodb.net/SEPrediction';
var option = {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true,
    auto_reconnect: true,
    useUnifiedTopology: true
}
mongoose.connect(mongoDB, option);
mongoose.Promise = global.Promise;

module.exports = mongoose;
