
  const songDatabase = {
    "happy": [
      { title: "Abhi Kuch Dino Se", artist: "Mohit Chauhan", link: "https://youtu.be/fbdxYoFb64g?si=PmrW69Ez7N_YCk8q" },
      { title: "Ye Tumhari Meri Baatein", artist: "Dominique Cerejo", link: "https://youtu.be/LpmGCHYAj1E?si=j6hmG2Y79Hr9CY54" },
      { title: "Jaane Ye Kya Hua", artist: "KK", link: "https://youtu.be/HEAmcT5Gy_c?si=4Ohvm7QOwtXFXcJ_" }
    ],
    "melancholic": [
      { title: "Agar Tum Saath Ho", artist: "Alka Yagnik & Arijit Singh", link: "https://www.youtube.com/watch?v=sK7riqg2mr4" }
    ],
    "hindi indie": [
      { title: "Kho Gaye Hum Kahan", artist: "Jasleen Royal", link: "https://www.youtube.com/watch?v=Obw8qDgpi44" }
    ]
    // Add more moods and songs here
  };

  document.getElementById("moodForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const checkedMoods = Array.from(document.querySelectorAll('input[name="mood"]:checked'))
                              .map(input => input.value.toLowerCase());

    let matchedSongs = [];

    checkedMoods.forEach(mood => {
      if (songDatabase[mood]) {
        matchedSongs = matchedSongs.concat(songDatabase[mood]);
      }
    });

    // Show one random song
    if (matchedSongs.length > 0) {
      const randomSong = matchedSongs[Math.floor(Math.random() * matchedSongs.length)];
      document.getElementById("songResult").innerHTML = `
        <h3>Your vibe-match 🎧</h3>
        <p><strong>${randomSong.title}</strong> by ${randomSong.artist}</p>
        <a href="${randomSong.link}" target="_blank">Play ▶️</a>
      `;
    } else {
      document.getElementById("songResult").innerHTML = <p>No songs found for the selected vibes 😢</p>;
    }
  });
