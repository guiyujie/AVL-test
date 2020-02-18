import axios from 'lib/axios'

export default {
  async search(weekday, time, page) {
    let res = await axios.get("/api/site/search", {
      params: {
        weekday,
        time,
        page
      }
    })
    return res
  }
}