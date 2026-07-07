-- Ejecuta esto UNA VEZ en el editor SQL de Neon (o Vercel Postgres) antes de desplegar.

CREATE TABLE IF NOT EXISTS app_state (
  id INT PRIMARY KEY,
  data JSONB,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Fila inicial vacía (la app la va a ir llenando sola desde el primer uso)
INSERT INTO app_state (id, data)
VALUES (1, '{}'::jsonb)
ON CONFLICT (id) DO NOTHING;
