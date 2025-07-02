# 🎧 Power Music

Power Music is a simple and interactive music discovery app powered by the [Jamendo API](https://developer.jamendo.com/v3.0/docs). Users can search royalty-free music, preview tracks, save favorites, and share their discoveries—all from a sleek, user-friendly interface.

---

## 🚀 Features

### MVP

- [x] 🔍 **Search for Music** – Enter keywords to explore royalty-free tracks by title, artist, or genre.
- [x] ▶️ **Play Music Previews** – Stream 30-second audio previews directly from search results.
- [x] 💾 **Save Favorites** – Save and revisit your favorite tracks across sessions.
- [x] 🔗 **Shareable Song Links** – Share songs with friends via direct or generated links.
- [x] 🧮 **Sort Search Results** – Sort music by popularity, release date, or duration using Jamendo API parameters.

### Stretch Goals

- [ ] 🏷️ **Tag-Based Filtering** – Refine searches using tags (e.g., chill, upbeat, acoustic).
- [ ] 📄 **About Page** – Explain the app and Jamendo’s role as a music provider.
- [ ] 🎛️ **Mini Audio Player** – A persistent audio player with playback controls.
- [ ] 🌗 **Light/Dark Theme Toggle** – Switch between light and dark UI themes (saved in localStorage).
- [ ] ⌨️ **Keyboard Navigation & Shortcuts** – Use keyboard controls for an efficient experience.
- [x] ❤️ **Add Favorites Page** – View and manage your favorites on one page.
- [ ] ❤️ **Display Today's Top Hits** – View today's top tracks on the home page.

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
git clone https://github.com/mclancy96/power-music.git
```

### 2. Start Backend (JSON Server)

```bash
cd power-music
npm install -g json-server #if you haven't done so already
npm i && npm run server
```

### 3. Open Frontend

```bash
cd power-music #if you're not there already
npm i && npm start
```

---

## Future Development

### Pages for Artists and Albums

I'd like to have pages for artists and albums that show the music available from those artists if a user happens to like either of them and wants to see more from that artist. I would envision it being a link similar to the one for the track show page in the favorites and results tables.

---

## 🔗 Useful Links

- [Jamendo Developer Docs](https://developer.jamendo.com/v3.0/docs)
- [json-server Docs](https://github.com/typicode/json-server)
