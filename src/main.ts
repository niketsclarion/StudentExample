import {App} from './config/App';

const app:App = new App();

app.server.listen(3001, () => {
    console.log("Restify Server Start on  "+3001);
 })
