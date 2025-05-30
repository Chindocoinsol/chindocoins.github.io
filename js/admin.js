function adminLogin() {
  alert("🔐 Firebase login placeholder — configure with Auth in prod mode.");
}

const demoTrends = [
  { title: "Elon quits DOGE", desc: "Fallout leads to meme war.", url: "#" },
  { title: "Trump insults South African leader", desc: "Accent wars trigger memes everywhere.", url: "#" },
  { title: "ETH ETF approved", desc: "Cultural memes around institutional greed.", url: "#" }
];

function refreshTrends() {
  const trendDiv = document.getElementById("trendResults");
  trendDiv.innerHTML = '';
  demoTrends.forEach(meme => {
    trendDiv.innerHTML += `
      <div class="meme-card">
        <h3>${meme.title}</h3>
        <p>${meme.desc}</p>
        <a href="${meme.url}" class="btn">Use This</a>
      </div>
    `;
  });
}
