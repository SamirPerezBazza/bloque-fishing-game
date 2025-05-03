# Bloque's Galactic Fishing Game

Welcome to my solution for the technical assessment from Bloque!  
This application renders a leaderboard table and a market drawer for the terminal Galactic Fishing Game. It is built using **SvelteKit** and **TypeScript**.

## Project Structure

The project is organized as follows:

- **`src/`**: The root directory containing all project files.
  - **`components/`**: Reusable Svelte components such as the table, loader, and cards.
  - **`lib/`**: Contains functionality for various parts of the app, including the API, assets, constants, and the store.
  - **`routes/`**: SvelteKit router directory, housing the pages and client-side fetchers.
  - **`tests/`**: Configured with Vitest to test different parts of the app.

## Getting Started

To set up the project locally:

1. Clone the repository.
2. Install dependencies using your preferred package manager:

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   To open the app in a new browser tab automatically:

   ```bash
   npm run dev -- --open
   ```

## Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

---

Thank you for checking out this project! Feel free to contribute or reach out with any feedback.
