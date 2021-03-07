export default function getGifs(keyword) {
  const apiKey = '0fXWaM3fTxDyJZr1IptN1Q1GakL8fcaU';
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=r&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(res => {
      return res.data.map(img => {
				const {title,id} = img;
				const {url} = img.images.downsized;
				return { title, id, url }
			});
    });
}

