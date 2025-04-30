import express from 'express';
import cors from 'cors';
import cep from 'cep-promise';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/cep/:codigo', async (req, res) => {
  const { codigo } = req.params;

  try {
    const endereco = await cep(codigo);
    res.status(200).json(endereco);
  } catch (erro) {
    res.status(400).json({ erro: 'CEP inválido ou não encontrado.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
