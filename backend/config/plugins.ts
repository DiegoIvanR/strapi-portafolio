import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  // Eliminamos toda la configuración de upload/supabase
});

export default config;
