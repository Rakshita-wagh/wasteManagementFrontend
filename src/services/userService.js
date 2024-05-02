import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api/v1/users";

class UserService {
  async submitUser(user) {
    return await axios.post(USER_API_BASE_URL + "/submit", user);
  }
}