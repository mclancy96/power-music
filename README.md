# 🎧 Power Music

Power Music is a simple and interactive music discovery app powered by the [Jamendo API](https://developer.jamendo.com/v3.0/docs). Users can search royalty-free music, preview tracks, save favorites, and share their discoveries—all from a sleek, user-friendly interface.

---

## 🚀 Features

### MVP

- 🔍 **Search for Music** – Enter keywords to explore royalty-free tracks by title, artist, or genre.
- ▶️ **Play Music Previews** – Stream 30-second audio previews directly from search results.
- 💾 **Save Favorites** – Save and revisit your favorite tracks across sessions.
- 🔗 **Shareable Song Links** – Share songs with friends via direct or generated links.
- 🧮 **Sort Search Results** – Sort music by popularity, release date, or duration using Jamendo API parameters.

### Stretch Goals

- 🏷️ **Tag-Based Filtering** – Refine searches using tags (e.g., chill, upbeat, acoustic).
- 📄 **About Page** – Explain the app and Jamendo’s role as a music provider.
- 🎛️ **Mini Audio Player** – A persistent audio player with playback controls.
- 🌗 **Light/Dark Theme Toggle** – Switch between light and dark UI themes (saved in localStorage).
- ⌨️ **Keyboard Navigation & Shortcuts** – Use keyboard controls for an efficient experience.

---

## 📁 Project Structure

### Frontend

- Built with **HTML**, **CSS**, and **JavaScript**
- Uses the **Jamendo API** for music discovery
- Interacts with a mock backend (`json-server`) for saving favorites

### Backend

- Powered by `json-server`
- Stores favorited songs in a `db.json` file
- RESTful routes for basic CRUD operations

```bash
json-server --watch db.json --port 3001
```

---

## 📊 API Endpoints

### Jamendo (Music Data)

- `GET https://api.jamendo.com/v3.0/tracks/?client_id=YOUR_CLIENT_ID&search=...`

### JSON Server (Favorites)

- `GET /favorites`
- `POST /favorites`
- `DELETE /favorites/:id`

---

## 🧪 How to Run Locally

### 1. Clone the Repos

```bash
git clone https://github.com/yourname/power-music-frontend.git
git clone https://github.com/yourname/power-music-backend.git
```

### 2. Start Backend (JSON Server)

```bash
cd power-music-backend
npm install -g json-server #if you haven't done so already
npm run server
```

### 3. Open Frontend

```bash
cd power-music
npm i && npm start
```

---

## 🔗 Useful Links

- [Jamendo Developer Docs](https://developer.jamendo.com/v3.0/docs)
- [json-server Docs](https://github.com/typicode/json-server)
