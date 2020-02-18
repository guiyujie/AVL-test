<template>
  <a-form :form="form" @submit="handleSubmit" layout="vertical">
    <a-form-item label="用餐时间">
      <a-date-picker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="Select Time"
        @change="onChange"
        @ok="onOk"
        v-decorator="[
            'datetime',
            {rules: [{ required: true, message: '请选择用餐时间' }]}
          ]"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      let { onSubmit } = this.props;
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let weekday = values.datetime.weekday();
          let value = values.datetime.format("YYYY-MM-DD HH:mm:ss");
          let time = value.split(" ")[1];
          onSubmit && onSubmit(weekday, time, value);
        }
      });
    }
  }
};
</script>