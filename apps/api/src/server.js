import { connectDatabase } from './config/db.js';
import { env } from './config/env.js';
import { createApp } from './createApp.js';
import { seedDefaultUsers } from './routes/auth.js';

async function bootstrap() {
  await connectDatabase(env.mongoUri, env.mongoFallbackUri);
  await seedDefaultUsers();

  const app = createApp({ webOrigin: env.webOrigin });

  app.listen(env.port, () => {
    console.log(`RP Education Hub API running on port ${env.port}`);
  });
}


bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});