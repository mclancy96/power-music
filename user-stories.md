# **Power Music User Stories**

## **MVP Features**

---

### **Feature 1: Search for Music**

#### **User Story**

As a user, I want to search for royalty-free music by keyword so that I can discover new songs that match my interests or mood.

#### **Details**

Allow users to enter a search term and fetch results from the [Jamendo API](https://developer.jamendo.com/v3.0/docs). Display song results including title, artist, and album art. Each result should allow playback of a short preview.

---

### **Feature 2: Play Music Previews**

#### **User Story**

As a user, I want to play short previews of songs directly from the search results so that I can hear what a track sounds like before deciding to save it.

#### **Details**

Each song in the search results should have a “Play” button that streams a 30-second audio preview from the Jamendo API. Only one song should play at a time to avoid overlapping audio.

---

### **Feature 3: Save Favorites**

#### **User Story**

As a user, I want to save songs I like to a favorites list so that I can easily listen to them again later.

#### **Details**

Allow users to “favorite” a song from the search results. The favorites should persist using localStorage or mock backend (e.g. JSON Server). Users can view their saved songs from a dedicated favorites page and remove items if desired.

---

### **Feature 4: Shareable Song Links**

#### **User Story**

As a user, I want to share a specific song with a friend so that they can listen to it too.

#### **Details**

Each song result could have a “Share” button that copies the direct link to the Jamendo track page or generates a shareable link to the app with pre-loaded song info.

---

### **Feature 5: Sort Search Results**

#### **User Story**

As a user, I want to sort search results by popularity, release date, or track duration so that I can find the most relevant or newest songs.

#### **Details**

Add sorting options that use Jamendo’s API query parameters like **order=popularity_total**, **order=date_desc**, or **order=duration_desc**.

---

## **Stretch Goals**

---

### **Feature 6: Tag-Based Filtering**

#### **User Story**

As a user, I want to filter music by tags or moods so that I can find songs that match a specific vibe (e.g., happy, chill, energetic).

#### **Details**

Use tag-based filters supported by the Jamendo API. Include a dropdown or tag selector UI component to refine the search by mood or genre.

---

### **Feature 7: About Page**

#### **User Story**

As a user, I want to understand what this app is and how it works so that I can confidently use it and know where the music comes from.

#### **Details**

Create an “About” route that includes a brief app description, Jamendo API attribution, and basic instructions for using the app.

---

### **Feature 8: Mini Audio Player with Controls**

#### **User Story**

As a user, I want a persistent mini-player with play/pause and skip controls so that I can control music playback as I navigate the app.

#### **Details**

Implement a sticky audio player at the bottom or top of the screen. It should show the current track, allow pausing/resuming, and possibly even skipping between previewed songs.

---

### **Feature 9: Light/Dark Theme Toggle**

#### **User Story**

As a user, I want to switch between light and dark mode so that I can listen comfortably at any time of day.

#### **Details**

Implement a simple theme toggle using CSS variables or a UI library. Persist the selected theme in **localStorage**.

---

### **Feature 10: Keyboard Navigation & Shortcuts**

#### **User Story**

As a user, I want to use my keyboard to play/pause music or navigate between tracks so that I can interact with the app more efficiently.

#### **Details**

Add keybindings like:

- **Space**: Play/Pause
- **Left/Right Arrow**: Previous/Next track (if applicable)
- **Esc**: Stop audio
