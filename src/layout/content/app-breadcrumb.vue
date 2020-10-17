<template>
  <div>
     <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item 
           v-for="item in route":key="item.name">{{item.meta.title}}</a-breadcrumb-item>
      </a-breadcrumb>
  </div>
</template>

<script>
  import {Breadcrumb} from "ant-design-vue"
export default {
  name: '',
  data () {
    return {
      route:this.routes,
      
    };
  },
  watch:{
    $route:{
      handler(){  
       this.$route.matched.shift()
       this.route = this.$route.matched
      },
      immediate:true,
      deep:true

    }
  },
  created(){
    // console.log(
    //   this.routes,
    //   this.route
    // )
    

  },
  components: {
     [Breadcrumb.name]:Breadcrumb,
    [Breadcrumb.Item.name]:Breadcrumb.Item,
  },
  computed:{
   
   

  },
  mounted () {},
  methods: {
    go(n){
      this.$router.push({name:n})
    }
  }
}
</script>

<style lang='scss' scoped>
</style>