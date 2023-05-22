const newman = require('newman');
 
newman.run({
 //   collection: require('./collection/dmoney.json'),
      collection:'https://api.postman.com/collections/27452892-4e651f1e-7c39-4773-9c0c-22e767298f78?access_key=PMAT-01H12KE3WFZW8JF86ZJ83AFT0M',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});