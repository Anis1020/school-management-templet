import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  await mongoose.connect(config.db_url as string);

  app.listen(config.port, () => {
    console.log(`the server is running at ${config.port} `);
  });
}
main();
