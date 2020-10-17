<template>
 <div>
   <router-view></router-view>
  <div class="course">
    <div class="head">
      <div class="title">
        <i></i>
        <span>筛选</span>
      </div>
      <ul>
        <li>
          <input type="text"
                 placeholder="请输入标题或关键字">
        </li>
        <li class="time">
          <label for="">上传时间</label>
          <div>
            
            <a-range-picker v-model="value">
              <template slot="dateRender"
                        slot-scope="current">
                <div class="ant-calendar-date"
                     :style="getCurrentStyle(current)">
                  {{ current.date() }}
                </div>
              </template>
            </a-range-picker>
          </div>
        </li>
        <li><span class="btn">筛选</span></li>
      </ul>
    </div>
    <tables :th="th" :td="td" :length='len' @change="changeskip"></tables>
  </div>
  </div>

</template>

<script>
import http from '../../api/http'
import {GET_BANNER} from "../../api/url"
import tables from "../../component/Bannertable"
import {DatePicker} from "ant-design-vue"
 import moment from 'moment';
  import 'moment/locale/zh-cn';
export default {
  created(){
    this.getbanner()
  },
  watch:{
    skip(){
      this.getbanner()
    },
    $route(){
      window.location.reload() 
    }
  },
  data () {
    return {
       value:'',
        th:[['轮播图标题','articleName'],['缩略图','articleImg'],['状态','articlePicket'],['上传人','articleUser']
        ,['上传时间','articleTime']],
        td:[1,2,3,4,5,6,78,7,4,5,45,45,4,44,4,64,313,,4,4,,,46],
        skip:0,
        len:0,
        moment,
    };
  },
  components: {
        [DatePicker.name]:DatePicker,
    [DatePicker.RangePicker.name]:DatePicker.RangePicker,
    [DatePicker.WeekPicker.name]:DatePicker.WeekPicker,
    tables,
  },
  mounted () {},
  methods: {
      getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return style;
    },
    changeskip(n){
      this.skip = n*5
    },
    async getbanner(){
        const {data} = await http.get(GET_BANNER,{
        skip:this.skip,
        limit:5,
    })
    this.len = data[data.length-1];
    data.pop();
    this.td=data
    }
  }
}
</script>

<style lang='scss' scoped>
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
      height: 100px;
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