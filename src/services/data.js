const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

async function fetchList(id) {
  const response = await fetch(`${BASE_URL}${id}stories.json`);

  return response.json();
}

async function fetchItem(id) {
  const response = await fetch(`${BASE_URL}item/${id}.json`);

  return response.json();
}

export { fetchList, fetchItem };
