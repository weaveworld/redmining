const app = require('express')(), bodyParser = require('body-parser');
app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log('Server started: http://localhost:3000');

const w = require('weaveworld');
w.dir = __dirname + '/public';
app.all('/*', w.route);

const redmining=require('./redmining');

w.op('getIssue').then((o) => new Promise(function (resolve, reject) {
    let env = process.env;
    if (!o.id) o.id = process.env.REDMINING_ID;
    if (!o.URL) o.URL = process.env.REDMINING_URL;
    if (!o.KEY) o.KEY = process.env.REDMINING_KEY;
    if (!o.URL || !o.KEY || !o.id) {
        resolve({
            $warning: `Set the URL, KEY and id parameters!

            REDMINING_URL=https://redmine.example.com
            REDMINING_KEY=Your api key
            REDMINING_ID=Comma separated root ids
            `});
        return;
    }
    try {
        redmining.getIssues(resolve, reject, '' + (o.id || ''), o);
    } catch (e) {
        console.log(e); reject(e);
    }
}));