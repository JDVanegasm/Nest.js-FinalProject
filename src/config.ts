import { registerAs } from '@nestjs/config';


export default registerAs('config', () => {
  // console.log(process.env)
  return {
    postgres: {
      host: process.env.DB_HOST,

      name: process.env.DB_DATABASE,

      user: process.env.DB_USUARIO || 'postgres',

      password: process.env.DB_PASSWORD || 'Mapache.dormilon2405',

      schema: 'public',

      port: parseInt(process.env.DB_PORT, 10),
      
    },
  };
});
