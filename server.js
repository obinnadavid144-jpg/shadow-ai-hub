import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ success: true, name: 'SHADOW AI HUB', status: 'ONLINE' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
