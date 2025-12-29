function submitToIndexNow(urls = []) {
  if (!urls.length) return;

  fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: "govtapplyzone.site",
      key: "689beec76d64422d95a84a057017d307",
      keyLocation:
        "https://govtapplyzone.site/689beec76d64422d95a84a057017d307.txt",
      urlList: urls,
    }),
  }).then(() => {
    console.log("IndexNow submitted");
  });
}
