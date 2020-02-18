<template>
  <div class="body">
    <div class="side">
      <Side onsubmit="handleSubmit" />
    </div>
    <div class="content">
      <a-table
        bordered="true"
        :columns="columns"
        :rowKey="record => record.login.uuid"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
      </a-table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapState } from "vuex";
import moment, { weekdays } from "moment";
import Side from "components/side";

import { site } from "api/index";

const columns = [
  {
    title: "餐厅名称",
    dataIndex: "name",
    sorter: true,
    width: "20%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "营业时间(周日)",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

export default {
  name: "App",
  components: {
    Side
  },
  data() {
    return {
      data: [],
      weekday: null,
      time: null,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0
      },
      loading: false,
      columns
    };
  },
  methods: {
    async handleSubmit(weekday, time) {
      let result = await this.fetchData(weekday, time);
    },
    async handleTableChange(pagination, filters, sorter) {
      let { weekday, time } = this.data;
      let { current } = pagination;
      let result = await this.fetchData(weekday, time, current);
    },
    async fetchData(weekday, time, page = 1) {
      console.log(site);
      return await site.search(weekday, time, page);
    }
  },
  async created() {
    let date = moment(Date());
    this.data.weekday = date.weekday();
    this.data.time = date.format("HH:mm:ss");
    let result = await this.fetchData(this.data.weekday, this.data.time, 1);
  },
  mounted: () => {}
};
</script>

<style lang="scss" scoped>
.body {
  max-width: 1680px;
  height: 100%;
  margin: 0 auto;
  padding-left: 300px;
  .side {
    width: 300px;
    height: 100%;
    padding: 20px;
    margin-left: -300px;
    float: left;
    background-color: #eee;
  }
  .content {
    background: #f4f4f4;
    width: 100%;
    height: 100%;
    padding: 40px 80px;
    float: right;
  }
}
</style>