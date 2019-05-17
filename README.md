# redmining

## Redmine Issue Visualization using Node.js &amp; Weaveworld


Perform an `npm install`, set the environment variables in `redmining.bat` or `redmining` shell script and start application. Edit `public/index.css` according to your Redmine's settings.

  * Mark '`▼`' shows if there are children. Clicking on `▼` button **closes** / **opens** children. Opening children or clicking the unmarked ' ' button **refreshes** the Issue.
  * Clicking on description **opens** the Issue. Use middle click to open is new browser window. 
  * Clicking on Redmine issue id **opens** the Issue in **Redmine**. Use middle click to open more Redmine browser window.
  * Issues are **sorted** by
    * priority DESC,
    * due_date ASC,
    * updated_on DESC.