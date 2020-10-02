// Library config
import { config } from "dotenv";
import { init } from "./src/api/Api";

// .env config
config();

// API running
init();