const app = require('./app');
const connection = require('./models/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Server is up on port ${PORT}`);
});