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
        <li><label>校区</label>
          <select>
            <option value="0">请选择校区</option>
            <option value="青海">青海</option>
            <option value="北京">北京</option>
            <option value="上海">上海</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
          </select>
        </li>

        <li><label>年级</label>
          <select>
            <option value="-1">请选择年级</option>
            <option value="一年级">一年级</option>
            <option value="二年级">二年级</option>
            <option value="三年级">三年级</option>
            <option value="四年级">四年级</option>
            <option value="五年级">五年级</option>
            <option value="六年级">六年级</option>

          </select>
        </li>
        <li><label>学科</label>
          <select>
            <option value="">请选择学科</option>
            <option value="不限">不限</option>
            <option value="语文">语文</option>
            <option value="数学">数学</option>
            <option value="英语">英语</option>
          </select>
        </li>
        <li><label>学期</label>
          <select>
            <option value="">请选择学期</option>
            <option value="不限">不限</option>
            <option value="春季班">春季班</option>
            <option value="夏季版">夏季版</option>
            <option value="秋季班">秋季班</option>
            <option value="冬季版">冬季版</option>
          </select>
        </li>
      </ul>
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
    <tables :th='th' :td="td" :length="len" @change="changeskip">
    </tables>
  </div>
  </div>
</template>

<script>
import http from '../../api/http'
import {GET_COURSE} from "../../api/url"
import tables from "../../component/Coursetable"
import {DatePicker} from "ant-design-vue"
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
        th:[['课程编号','courseNumber'],['课程名称','courseName'],['校区','courseSchool'],['年级','courseGrade']
        ,['学期','courseTerm'],['价格','coursePrice'],['名额','coursePlaces'],['学科','courseSubject']],
        td:[],
        skip:0,
        len:'',

    };
  },
  components: {
    [DatePicker.name]:DatePicker,
    [DatePicker.RangePicker.name]:DatePicker.RangePicker,
    [DatePicker.WeekPicker.name]:DatePicker.WeekPicker,
    tables

  },
  mounted () { },
  methods: {
    changeskip(i){
      this.skip = i*5
    },
     getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return style;
    },
   async gettable(n){
      let result =  await http.get(GET_COURSE,{
       limit:5,
        skip:n,
       })
       this.len =  result.data[result.data.length-1]
         result.data.pop();
        this.td=result.data
        console.log(this.len,this.td)

    }
  }
  ,created(){
    this.gettable(this.skip);
   

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