
import express from "express";

export function init(): void {
const app = express();

app.set("trust proxy", true);

app.use("/", require("./routes/Home"));
const listener = app.listen(process.env.PORT ? process.env.PORT : 8080, () => {
   console.log(`Listening to ${(listener.address() as any).port}`); 
});
}