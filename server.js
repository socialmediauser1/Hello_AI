import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(cors({
  origin: ['https://socialmediauser1.github.io', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

const API_KEY = process.env.OPENAI_API_KEY;
const API_BASE = process.env.OPENAI_API_BASE || 'https://api.openai.com/v1';
const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

if (!API_KEY) {
  console.warn('\n[WARN] OPENAI_API_KEY is not set.\nRequests will fail until you set it in your environment.');
}

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body || {};
    if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

    const resp = await fetch(`${API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': req.headers['referer'] || '',
        'X-Title': 'Hello AI Minimal'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You are a concise, helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    });

    if (!resp.ok) {
      const text = await resp.text();
      return res.status(resp.status).json({ error: `Upstream ${resp.status}`, details: text });
    }

    const json = await resp.json();
    const reply = json.choices?.[0]?.message?.content?.trim() || '';
    return res.json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error', details: String(err) });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\nHello AI ready on http://localhost:${port}\n`));