const fetchAPI = async (subReddit) => {
  const request = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
  const response = await request.json();
  const data = response.data.children;
  const posts = data.map((e) => {
    const info = {};
    info.title = e.data.title;
    info.url = e.data.url;
    info.id = e.data.id;
    return info;
  });
  return posts;
};

export default fetchAPI;
