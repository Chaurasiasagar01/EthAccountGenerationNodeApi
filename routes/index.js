const route = require('./route');
const ethAddr = require('./ethAddrRoute');

class Routes {
constructor(app) {
    this.app = app;
}
configRoutes() {
    this.app.use('/', route);
    this.app.use('/ethaddr', ethAddr);
    }
}

module.exports = Routes;