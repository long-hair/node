<template>
  <div>
     <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
  </div>
</template>

<script>
  import {Layout} from "ant-design-vue"

export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {
    [Layout.Footer.name]:Layout.Footer
  },
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>