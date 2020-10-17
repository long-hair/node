<template>
  <div class="table" v-if="td"> 
     <div class="title">
        <span>轮播图列表</span>
        <span class="add" @click="add">新增轮播图</span>
      </div>
      <table border="1px"  
       >
        
        <tr>
          <th class="check">选择</th>
          <th v-for="item in th">{{item[0]}}</th>
          <th class="operate">操作</th>
        </tr>
        <tr v-for="(item,index) in td" :name='index ':key="index">
          <td><input type="checkbox" name="select" value="index" :key="index" ></td>
            <!-- <span>编辑</span> -->
            <td v-if="item" v-for="(i,ins) in th" :key="ins">{{ ins !=1 ? item[th[ins][1]] : ''}}

            <img :src="item.articleImg" alt="" v-if="ins==1">

            </td>
            <td>
            <span @click="del(item.articleName)" >删除</span>

          </td>
        </tr>
      </table>
      <div class="footer">
         <span class="checkall"><input type="checkbox">全选</span>
      <span class="all">批量导出</span>
      <span class="page">共{{Math.ceil(length/5)}}页/共{{length}}条数据</span>
      <div class="pages">
        <span><</span>
        <div v-for="item  in Math.ceil(length/5)"  @click="get(item-1)"  :class="{active:item-1==index}" :key="item">
          {{item}}
        </div>
        <span>></span>

      </div>
      </div>
     
  </div>
</template>

<script>
import http from '../api/http'
import {DEL_BANNER} from "../api/url"
export default {
  created(){
  },
 props:{
   th:Array,
   td:Array,
   length:Number,
 },
  data () {
    return {
      index:0,
     
      
    };
  },
  components: {},
  mounted () {},
 
  methods: {
    add(){
      this.$router.push({name:'article-add'})
    },
    get(item){
      this.index = item
      this.$emit('change',item)

    },
    async del(n){
      console.log(n)
     const result = await http.get(DEL_BANNER,{
        'articleName':n
      })
    if(result.data.code==0){
      alert(result.data.message)
      window.location.reload() 
    }else{
       alert(result.data.message)
    }

    }
  }
}
</script>

<style lang='scss' scoped>
.active{
  background-color: cornflowerblue;
  color: white;
}
img{
  width: 40px;
  height: 40px;
}
.table{
  width: 915px;
  border: 1px solid #999;
  .add{
    display: inline-block;
    width: 100px;
    height: 34px;
    background-color: rgb(16,142,233);
    text-align: center;
    line-height: 34px;
    font-size: 14px;
    color: #fff;
    border-radius: 5px;
  margin-right: 20px;

  }
  li{
    list-style: none;
  }
   .title{
     margin-top: 10px;
      width: 913px;
      height: 46px;
      font-size:16px ;
      background-color: rgba(242, 242, 242, 1);
      line-height: 46px;
      padding-left: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    table{
      width: 900px;
      text-align: center;
      margin: 30px 5px 0 5px ;
      margin-top: 30px;
      td{
        span{
          margin: 5px;
          cursor: pointer;
        }
      }
      tr{
        height: 43px;
      }
      th{
        background-color: rgb(242,242,242);
      }
      .check{
        width: 50px;
        text-align: center;
      }
      .operate{
        width: 100px;
      }

    }
    .footer{
      width: 100%;
      height: 92px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .checkall{
        display: inline-block;
        font-size: 14px;
        width: 80px ;
        height: 35px;
        border: 1px solid #999;
        border-radius: 5px;
        text-align: center;
        line-height: 35px;
        margin-left: 4px;
        input{
          margin-right: 5px;
        }
      }
      .all{
        // margin-left: 50px;
        cursor: pointer;
      }
      .page{
  
        
      }
      .pages{
        display: flex;
        span{
          display: block;
          width: 33px;
          height: 33px;
          border: 1px solid #999;
          font-size: 40px;
          line-height: 20px;
          margin:0 5px;
        }
        div{
          width:33px;
          height: 33px;
           border: 1px solid #999;
           text-align: center;
           line-height: 30px;
           font-size: 16px;

        }
      }
    }
}
</style>