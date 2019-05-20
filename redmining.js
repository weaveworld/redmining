const request = require('request');

function issueCheck(issue, leave) {
  if (issue.updated_on) issue.updated_on=issue.updated_on.replace('T', ' ');
  if (issue.children) {
      let same = true;
      for (let child of issue.children) {
          issueCheck(child, false);
      }
      for (let child of issue.children) {
          if (child.status
              && !(same = !child.children && (issue.status.id == child.status.id || issue.closed_on && child.closed_on))) {
              break;
          }
      }
      if (!leave && same) {
          issue.children = null;
      } else {
          issue.children.sort((a, b) => {
              let n;
              if (a.priority && b.priority && !!(n = b.priority.id - a.priority.id)) return n;
              let da = a.due_date || '9999-99-99', db = b.due_date || '9999-99-99';
              if (da < db) return -1; else if (da > db) return 1;
              da = a.updated_on || '0000-00-00'; db = b.updated_on || '0000-00-00';
              if (da > db) return -1; else if (da < db) return 1;
              return 0;
          })
      }
  }
}

function getIssues(resolve, reject, result, o, queue) {
  if(typeof(result)=='string'){
    let ids = ('' + (o.id || '')).split(',');
    result = { issues: [] }; ids.forEach(id => { result.issues.push({ id: id }) });
  }
  if (!queue) { queue = []; result.issues.forEach(issue => queue.push(issue)); }
  var issue = queue.shift();
  request(o.URL + "/issues/" + issue.id + ".json?key=" + o.KEY + "&include=children&limit=100", function (err, res, body) {
      if (err || !body) { reject(err); return; }
      var r = JSON.parse(body).issue; 
      Object.assign(issue, r); issue.$url=o.URL+"/issues/"+issue.id;
      if (issue.children) {
          issue.$hasChildren = true;
          if (!o.open) issue.children = null; else queue.push(...issue.children);
      }
      if (!queue.length) {
          result.issues.forEach(o => issueCheck(o, true));
          resolve(result);
      } else {
          getIssues(resolve, reject, result, o, queue);
      }
  });
}

module.exports.getIssues=getIssues;