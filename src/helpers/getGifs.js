const getGifs = async (categoria) => {
  const key = "DrU82YAfQbQyJa18SBqRQk51AdqNuNow";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${categoria}&limit=10`;
  const response = await fetch(url);

  const { data } = await response.json();
  console.log(response.json());
  const gifs = data.map((element) => ({
    id: element.id,
    title: element.title,
    url: element.images.downsized_medium.url,
  }));
  return gifs;
};
export default getGifs;
