# websocket-tester
 
Run `npm start` to serve a page that will update for any websocket events broadcast from the host.  The page also has a button that emits an update event to all connected clients.

App will default to port `80`, but can be run on a different port byt setting th `PORT` environment variable prior to launching the app.

To build from source, run `npm install` then `npm run build`.  After that, the above instructions should work to run the app. 
