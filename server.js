const express = require('express');
const PORT = process.env.PORT || 5000;
const server = express();
const postRoutes = require('./routes');

server.use(express.json());
server.use('/api/posts', postRoutes);

// config server port
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
