const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Firebase Admin
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/projects', (req, res) => {
    res.json([
        { title: "Project One", description: "Description of project one.", link: "#" },
        { title: "Project Two", description: "Description of project two.", link: "#" }
    ]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
