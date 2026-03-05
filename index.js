const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDIWM90LAgdyjtdzFduOsSzmPS71RPQ0yQ",
    authDomain: "sentinel-cyber-7a793.firebaseapp.com",
    projectId: "sentinel-cyber-7a793",
    storageBucket: "sentinel-cyber-7a793.firebasestorage.app",
    messagingSenderId: "1007247028266",
    appId: "1:1007247028266:web:16a967939c77dce1231353"
};

app.get('/api/status', (req, res) => {
    res.json({
        status: "SENTINEL Backend Online",
        database: "Firebase Connected"
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sentinel Backend en ligne sur le port ${PORT}`);
});

module.exports = app;