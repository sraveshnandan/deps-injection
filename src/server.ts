import { app } from "./app";
import { _env } from "./config/config";

const init_server = () => {
  try {
    app.listen(_env.PORT, () => {
      console.log(`🚀 Server is up and running.`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

init_server();
