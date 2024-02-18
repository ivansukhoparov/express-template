import {app} from "./app";

const port = 5002

app.listen(port, async ()=>{
    console.log(`app start on port ${port}`);
    console.log(`open in browser http://localhost:${port}`);
})
