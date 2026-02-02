import { app } from "./app";
import { _env } from "./config/config";

const init_server = () => {
  try {
    app.listen(_env.PORT, () => {
      console.log(`🚀 Server is running on port ${_env.PORT}`);
    });
  } catch (error) {}
};

init_server();
