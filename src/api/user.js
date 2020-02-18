import axios from 'lib/axios'

export default {
  async login() {
    let res = await axios.get("/api/user/login", {
      params: {}
    })
    return res
  }
}