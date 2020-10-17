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
        <li><label>校区</label>
          <select>
            <option value="0">请选择校区</option>
            <option value="海淀校区">海淀校区</option>
            <option value="朝阳校区">朝阳校区</option>
            <option value="西城校区">西城校区</option>
            <option value="东城校区">东城校区</option>
            <option value="石景山校区">石景山校区</option>
          </select>
        </li>
        <li><input type="text" placeholder="请输入教师姓名"></li>
        <li><span class="btn">筛选</span></li>
      </ul>
    </div>
    <tables :th="th" :td="td" :length='len' @change="changeskip"></tables>
  </div>
  </div>

</template>


<script>
import http from '../../api/http'
import {GET_TEACHERS} from "../../api/url"
import tables from "../../component/Teachers-Table"
export default {
  name: '',
  watch:{
    skip(n){
        this.gettable(n);
    } 
  },
  data () {
    return {
        value:'',
        th:[['教师姓名','teachersName'],['手机号','teachersPhone'],['校区','teachersSchool'],['年级','teachersGrade']
        ,['学科','teachersSubject'],['教师类型','teachersType']],
        td:[],
        skip:0,
        len:'',
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
      let result =  await http.get(GET_TEACHERS,{
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
  ,created(){
    this.gettable(this.skip);
   

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