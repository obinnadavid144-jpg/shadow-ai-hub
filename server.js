import express from 'express';
const app = express();
app.use(express.json());

// Health check
app.get('/', (req, res) => {
    res.json({ 
        success: true, 
        name: 'SHADOW AI HUB', 
        status: 'ONLINE',
        endpoints: ['/health', '/api/test', '/api/echo']
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Test endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'SHADOW AI backend is working!' });
});

// Echo endpoint
app.post('/api/echo', (req, res) => {
    res.json({ 
        received: req.body, 
        timestamp: new Date().toISOString() 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => {
    console.log(`✅ SHADOW AI HUB running on port ${PORT}`);
});
