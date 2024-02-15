import express from "./config/express";
import http from "http";
import { appDataSource } from "./database/data-source";

appDataSource.initialize().then(async () => {
  const app = http.createServer(express);

  app.listen(3000, () =>
    console.log(`Server running at: http://localhost:3000`)
  );

}).catch((error) => {
  console.log(error)
});
