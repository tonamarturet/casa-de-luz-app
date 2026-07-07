const { neon } = require('@neondatabase/serverless');

module.exports = async (req, res) => {
  if (!process.env.DATABASE_URL) {
    res.status(500).json({ error: 'Falta configurar la variable de entorno DATABASE_URL en Vercel.' });
    return;
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    if (req.method === 'GET') {
      const rows = await sql`SELECT data FROM app_state WHERE id = 1`;
      res.status(200).json(rows[0] ? rows[0].data : null);
      return;
    }

    if (req.method === 'PUT' || req.method === 'POST') {
      // En funciones serverless de Vercel, req.body ya viene parseado si el
      // Content-Type es application/json.
      const data = req.body;
      const json = JSON.stringify(data);
      await sql`
        INSERT INTO app_state (id, data, updated_at)
        VALUES (1, ${json}::jsonb, now())
        ON CONFLICT (id) DO UPDATE SET data = ${json}::jsonb, updated_at = now()
      `;
      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: 'Método no soportado' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};
