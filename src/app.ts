import express, {Request, Response} from "express";

export const app = express();
app.use(express.json());
app.get("/", async (req:Request, res:Response)=>{
    res.json({greeting:"hello world"})
})
