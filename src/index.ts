import app from './app';  // Importer l'application configurée
import 'dotenv/config';
import { PORT } from "./config/env";

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});