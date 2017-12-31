const URL_ROOT = "http://localhost:3004";

export function getCars(keyword) {
  const request = fetch(`${URL_ROOT}/carsIndex?q=${keyword}`, {
    method: "GET"
  });

  return {
    type: "SEARCH_CARS",
    payload: request
  }
}
