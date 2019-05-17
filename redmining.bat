echo on
cd %0/..
set REDMINING_URL=https://redmine.example.com
set REDMINING_KEY=Your api key
set REDMINING_ID=Comma separated root ids
start http://localhost:3000/
node .