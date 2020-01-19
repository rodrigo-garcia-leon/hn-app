export const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

async function fetchList(id) {
  let json;

  try {
    const response = await fetch(`${BASE_URL}${id}stories.json`);
    json = await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }

  return json;
}

async function fetchItem(id) {
  let json;

  try {
    const response = await fetch(`${BASE_URL}item/${id}.json`);
    json = await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }

  return json;
}

export { fetchList, fetchItem };
