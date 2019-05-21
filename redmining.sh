cd "$( cd -P "$( dirname "$0" )" >/dev/null 2>&1 && pwd )"
export REDMINING_URL="https://redmine.example.com"
export REDMINING_KEY="Your api key"
export REDMINING_ID="Comma separated root ids"
(sleep 0.5 && xdg-open http://localhost:3000/)&
node .
