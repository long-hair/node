<template>
  <div>
      <a-menu theme="dark" mode="inline" @click="changeRouterAction"
      :default-selected-keys = "[selectKey]"
      :defaultOpenKeys = "openKeys"
      >
        <template    v-for="item in menuData"
        >
        <!-- 三级目录 -->
          <!-- <a-sub-menu 
          v-if="item.children&&item.children.children&&item.children.children.length>0"
           :key="item.name">
          <span slot="title">
              <a-icon type="user" />
              <span>{{item.meta.title}}</span>
            </span>
              <a-sub-menu v-for="subitem in item.children" key="sub3">
              <span slot="title">
                <a-icon type="user" />
                <span>{{subitem.meta.title}}</span>
                </span>
            </a-sub-menu>
         
          <a-menu-item key="3">
            Tom 
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu> -->


           <!-- 二级目录 -->
          <a-sub-menu
          v-if="item.children&&item.children.length>0"
          :key="item.name">
          <span slot="title"><a-icon type="team" /><span>{{item.meta.title}}</span></span>
          <a-menu-item v-for="subitem in item.children" :key="subitem.name">
            {{subitem.meta.title}}
          </a-menu-item>
          
        </a-sub-menu>

        <!-- 一级目录  -->
          <a-menu-item v-else :key="item.name">
          <a-icon type="pie-chart" />
          <span>{{item.meta.title}}</span>
         </a-menu-item>
   
        </template>

        
      </a-menu>
  </div>
</template>

<script>
import mainRouter from '../../router/main'
import {Menu,Icon} from 'ant-design-vue';
export default {
  name: '',
  data () {
    return {
      menuData:mainRouter.children,
      selectKey:this.$route.name,
      // openKey:this.openKeys
    }
  },
  created(){
  },
  components: {
     [Menu.name]:Menu,
    [Menu.Item.name]:Menu.Item,
    [Menu.SubMenu.name]:Menu.SubMenu,
    [Icon.name]:Icon,

  },
  computed:{
openKeys(){
  const index = this.$route.matched.findIndex(item=>item.name == this.$route.name)
  if(index===1){
    return [];
  }else{

    return [this.$route.matched[1].name]
  }
}
  },
  mounted () {},
  methods: {
    changeRouterAction({key}){
      // const {key} = rest
      this.$router.push({name:key})

    }
  }
}
</script>

<style lang='scss' scoped>
.ant-layout{
  height: 100%;
}
</style>