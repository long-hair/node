<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <AppHeader></AppHeader>
     <a-layout-content>
       <a-layout>
          <a-layout-sider v-model="collapsed" collapsible>
            <div class="logo" />
          <!-- menu -->
          <AppMenu></AppMenu>
          </a-layout-sider>
          <a-layout>
              <a-layout-content style="margin: 0 16px">
            <!-- 面包屑 -->
            <BreadCrumb></BreadCrumb>
              <div class="concent" :style="{  background: '#fff'}">
                <router-view style="margin:24px" ></router-view>
              </div>
            </a-layout-content>
          <!-- 底部 -->
          <Footer></Footer>
          </a-layout>
       </a-layout>
      </a-layout-content>
  </a-layout>
</template>
<script>
import AppHeader from './content/app-header'
import BreadCrumb from './content/app-breadcrumb'
import Footer from './content/app-footer'
  import {Layout,Menu,Breadcrumb,Icon} from "ant-design-vue"
  import AppMenu from "./content/app-menu"
export default {
  components:{
    AppMenu,
    AppHeader,
    BreadCrumb,
    Footer,
    [Icon.name]:Icon,

    [Layout.name]:Layout,
    [Layout.Sider.name]:Layout.Sider,
    [Layout.Header.name]:Layout.Header,
    [Layout.Content.name]:Layout.Content,

   
    // [Menu.Item.name]:Menu,

   


  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
/* .ant-layout-sider{
  background-color: rgb(252,252,252);
} */
.ant-layout{
  height: 100%;
}

</style>
<style lang="scss" scoped>
.concent{
  position: relative;
  min-height: 500px;
  padding: 24px;
  background-color: white;
}

</style>
