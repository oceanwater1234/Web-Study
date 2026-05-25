import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:3001', // Next.js 기본 주소
  credentials: true
}));

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Express 백엔드에서 보낸 인사입니다! 🚀',
    success: true
  });
});

app.listen(PORT, () => {
  console.log(`서버가 켜졌습니다: http://localhost:${PORT}`);
});