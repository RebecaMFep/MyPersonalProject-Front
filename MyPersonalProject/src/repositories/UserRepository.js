export default class UserRepository {

  uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

  async save(data) {
    try {
      const response = await fetch(this.uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const text = await response.json();
      console.log(text);
    } catch (error) {
      throw new Error(
        "Error occured during API fetch POST request to the User table"
      );
    }
  }
}
