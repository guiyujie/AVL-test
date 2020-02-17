import axios from 'lib/axios'

export default {
  async login() {
    let res = await axios.get("/mock/user.json", {
      params: {}
    })
    return res
  }
}