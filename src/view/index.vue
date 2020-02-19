<template>
  <div class="body">
    <div class="side">
      <Side :onsubmit="handleSubmit" />
    </div>
    <div class="content">
      <a-table
        bordered="true"
        :columns="columns"
        :rowKey="record => record.id"
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

import api from "api/index";

const zhNum = ["", "一", "二", "三", "四", "五", "六", "日"];
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
      loading: false
    };
  },
  computed: {
    columns() {
      let { weekday } = this;
      return [
        {
          title: "餐厅名称",
          dataIndex: "name"
        },
        {
          title: `营业时间(周${zhNum[weekday]})`,
          dataIndex: `day${weekday}`
        },
        {
          title: "类型",
          dataIndex: "type"
        },
        {
          title: "米其林星",
          dataIndex: "star"
        },
        {
          title: "停车",
          dataIndex: "park"
        },
        {
          title: "外送",
          dataIndex: "takeout"
        },
        {
          title: "先缴定金",
          dataIndex: "deposit"
        },
        {
          title: "评价",
          dataIndex: "score"
        }
      ];
    }
  },
  methods: {
    handleSubmit(weekday, time) {
      this.weekday = weekday;
      this.time = time;
      this.fetchData(weekday, time);
    },
    handleTableChange(pagination, filters, sorter) {
      let { weekday, time } = this;
      let { current } = pagination;
      this.fetchData(weekday, time, current);
    },
    async fetchData(weekday, time, page = 1) {
      this.loading = true;
      let { data } = await api.site.search(weekday, time, page);
      this.loading = false;
      this.data = data.result;
      this.pagination = {
        current: data.page,
        pageSize: 10,
        total: data.total
      };
    }
  },
  async created() {
    let date = moment(Date());
    this.weekday = date.weekday() + 1;
    this.time = date.format("HH:mm:ss");
    this.fetchData(this.weekday, this.time, 1);
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