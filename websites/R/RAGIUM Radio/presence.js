module.exports = async function (Presence) {
  setInterval(() => {
    const artist = document.querySelector("#artistInfo")?.textContent?.trim();
    const title = document.querySelector("#trackInfo")?.textContent?.trim();

    const fullTitle = artist && title ? `${artist} – ${title}` : "RAGIUM Radio";

    Presence.setActivity({
      details: `Słucha: ${fullTitle}`,
      state: "RAGIUM Radio PL",
      largeImageKey: "music", 
      largeImageText: "Słuchanie muzyki",
      startTimestamp: Date.now()
    });
  }, 15000);
};
