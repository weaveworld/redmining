# redmining

## Redmine Issue Visualization using Node.js &amp; Weaveworld

**Setup**:
   * Redmine setup:
     * (`Authentication`/) `Enable REST service`
   * Redmine user setup:
     * Get API Key: in the top right of the screen: `My account`, `API access key` section, click `Show`.
   * [Node.js](https://nodejs.org/en/download/)
   * `git clone https://github.com/weaveworld/redmining`
   * `cd redmining`
   * `npm install`
   * Set the environment variables in `redmining.bat` or `redmining.sh` shell script. 
   * Start application via shell script. 
   * Edit `public/index.css` according to your Redmine's settings.

**Legend**:
  * Mark '`▼`'/'&nbsp;' on the top left corner shows if there are children. 
    * Clicking on `▼`/'&nbsp;' button **closes** / **opens** children. Opening children or clicking the unmarked ' ' button **refreshes** the Issue.
  * Clicking on description **opens** the Issue.
    * Use middle click to open is new browser window. 
  * Clicking on Redmine issue id **opens** the Issue in **Redmine**. 
    * Use middle click to open more Redmine browser window.
  * Issues are **sorted** by
    * priority DESC,
    * due_date ASC,
    * updated_on DESC.