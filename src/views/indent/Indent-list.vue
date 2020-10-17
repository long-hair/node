<template>
 <div class="wrap">
   <router-view></router-view>
  <div class="course">
    <div class="head">
      <div class="title">
        <i></i>
        <span>筛选</span>
      </div>
      <ul>
        <li><input type="text" placeholder="请输入教手机号"></li>
        <li><span class="btn">筛选</span></li>
      </ul>
    </div>
    <tables :th="th" :td="td" :length='len' @change="changeskip"></tables>
  </div>
  </div>

</template>


<script>
import http from '../../api/http'
import {GET_INDENT} from "../../api/url"
import tables from "../../component/Indenttable"
export default {
  name: '',
  watch:{
    skip(n){
        this.gettable(n);
    } ,
  },
    created(){
    this.gettable(this.skip);
   

  },
  data () {
    return {
        value:'',
        th:[['手机号','userphone'],['课程名称','indentSubject'],['订单价格','indentPrice']],
        td:[],
        skip:0,
        len:0,
        t:100,

    };
  },
  components: {
    tables,

  },
  mounted () { },
  methods: {
    changeskip(i){
      this.skip = i*5
    },
   async gettable(n){
      let result =  await http.get(GET_INDENT,{
       limit:5,
        skip:n,
       })
       this.len =  result.data[result.data.length-1]
         result.data.pop();
        //  result.data =  result.data.map(item=>{
          
        //      var arr = ''
        //      for(var i = 0; i<item.courseSchool.length;i++){
        //        arr += item.courseSchool[i] + ' '
               
            
        //      }
 
        //      return {
        //        ...item,
        //        courseSchool:arr
        //    }
        //  })
        //    ({
        //   ...item,
        //   courseSchool:item.courseSchool[0]

        //  })
        //  )
        //  }
        this.td=result.data

    }
  }

}
</script>
<style lang='scss' scoped>
.wrap{
  // position: absolute;
  // left:0px;
  min-width: 1200px;
  // height: 100%;
  // overflow: hidden;
}
li{
  list-style: none;
}
.course{
  .head{
    width: 915px;
    border: 1px solid #999;
    .title{
      width: 913px;
      height: 46px;
      font-size:16px ;
      background-color: rgba(242, 242, 242, 1);
      line-height: 46px;
      padding-left: 40px;
    }
    ul{
      margin: 0;
      padding: 5px;
      width:100%;
      display: flex;
      align-items: center;
      li{
          label{
        font-size: 14px;
        height: 36px;
        line-height: 36px;
        margin-right: 15px;
        margin-left: 15px;
      }
      select{
          width: 165px;
          height: 36px;
          background-color:rgb(239,241,245) ;

          option{
            background-color: #Fff;

          }
      }
      }
      input{
        margin-left: 20px;
        border: 1px solid #999;
        outline: none;
        margin-right: 20px;
      }
      .time{
        display: flex;
      }
      .btn{
        display: block;
        color: white;
        background-color: rgb(16,142,233);
        width: 69px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        margin-left: 80px;
        cursor: pointer;

      }

      
    }
  }

}
</style>
<style lang="scss">
.ant-layout-content,.ant-layout-header{
  min-width: 1280px;
  min-height: max-content;
}
.ant-layout-content{
  height: 100%;
}


</style>