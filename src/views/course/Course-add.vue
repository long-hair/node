<template>
  <div class="add-course">
    <ul>
      <li>
        <label for="">课程编号</label>
        <input  type="text"
                v-model="number"
               placeholder="请输入">
      </li>
      <li>
        <label for="">课程名称</label>
        <input type="text"
         v-model="name"
               placeholder="请输入">
      </li>
      <li class="list-pic">
                <label for="">列表图</label>
              <div class="clearfix">
            <a-upload
              action="
              "
              list-type="picture-card"
              :file-list="fileList"
              @preview="handlePreview"
              @change="handleChange"
            >
              <div v-if="fileList.length < 1">
                <a-icon type="plus" />
                <div class="ant-upload-text">
                  Upload
                </div>
              </div>
            </a-upload>
            <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
               <img alt="example" style="width: 100%" :src="previewImage" /> 
            </a-modal>
          </div>
          <h6>建议尺寸120*90像素，大小不要超过1M</h6>
      </li>
      <li>
        <label for="">校区</label>
        <input type="checkbox" v-model="school" name="haidian" value="海淀校区" id="1">海淀校区
        <input type="checkbox" v-model="school" name="chaoyang" value="朝阳校区" id="2">朝阳校区
        <input type="checkbox" v-model="school" name="xicheng" value="西城校区" id="3">西城校区
        <input type="checkbox" v-model="school" name="dongcheng" value="东城校区" id="4">东城校区
        <input type="checkbox" v-model="school" name="shijingshan" value="石景山校区" id="5">石景山校区
        <input type="checkbox" v-model="school" name="fengtai" value="丰台校区" id="6">丰台校区

      </li>
       <li><label>年级</label>
          <select v-model="grade">
            <option value="">请选择年级</option>
            <option value="一年级">一年级</option>
            <option value="二年级">二年级</option>
            <option value="三年级">三年级</option>
            <option value="四年级">四年级</option>
            <option value="五年级">五年级</option>
            <option value="六年级">六年级</option>

          </select>
        </li>
       <li><label>学期</label>
          <select v-model="term">
            <option value="">请选择学期</option>
            <option value="不限">不限</option>
            <option value="春季班">春季班</option>
            <option value="夏季版">夏季版</option>
            <option value="秋季班">秋季班</option>
            <option value="冬季版">冬季版</option>
          </select>
        </li>
      <li>
        <label for="">价格</label>
        <input v-model="price" type="text" placeholder="0.00">元
      </li>
      <li>
        <label for="">名额</label>
        <input v-model="places" type="text" placeholder="0">人
      </li>
      <li><label>学科</label>
          <select v-model="subject">
            <option value="-1">请选择学科</option>
            <option value="不限">不限</option>
            <option value="语文">语文</option>
            <option value="数学">数学</option>
            <option value="英语">英语</option>
          </select>
      </li>
      <li>
        <label for="">是否上架</label>
        <input type="radio" name="putaway">是
        <input type="radio" name="putaway">否
      </li>
      <li>
        <label for="">是否推荐到首页</label>
        <input type="radio" name="home">是
        <input type="radio" name="home">否
      </li>
          <li>
        <label for="">是否立即开课</label>
        <input type="radio" name="open">是
        <input type="radio" name="open">否
      </li>
        <li class="time">
          <label  for="">课程日期</label>
          <div>
            
            <a-range-picker v-model= 'value' >
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
        <li><label for="">课时</label>
        <input v-model="time" type="text" placeholder="0">
        </li>
        <li>
          <label for="">课程介绍</label>
          <textarea v-model="introduce" name="" id="" cols="80" rows="10"></textarea>
        </li>
    </ul>
    <div class="btn">
        <span class="btn" @click="submit">提交</span>
        <span class="btn" @click="cancel">取消</span>
    </div>
    

  </div>
</template>

<script>
// import moment from 'moment'
import {DatePicker,Input} from "ant-design-vue"
import reqwest from 'reqwest';
import {Upload,Button,Icon,Modal} from "ant-design-vue"
import http from '../../api/http'
import {COURSE_ADD} from "../../api/url"
console.log(Input)
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {

  data () {
    return {
      value:'',
       previewVisible: false,
      previewImage: '',
      fileList: [
        // {
        //   uid: '-4',
        //   name: 'image.png',
        //   status: 'done',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
        // {
        //   uid: '-5',
        //   name: 'image.png',

        //   status: 'error',
        // },
      ],
      introduce:'',
      time:'',
      subject:'',
      places:'',
      price:'',
      term:'',
      grade:'',
      school:[],
      img:'',
      name:'',
      number:''

    };
  },
    components:{
    [Upload.name]:Upload,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [Modal.name]:Modal,
    [DatePicker.name]:DatePicker,
    [DatePicker.RangePicker.name]:DatePicker.RangePicker,
    [DatePicker.WeekPicker.name]:DatePicker.WeekPicker,
    
  },
  mounted () { },
  methods: {
   async submit(){
      const result = await  http.post(COURSE_ADD,{
        courseNumber:this.number,
        courseName:this.name,
        courseImg:this.img,
        courseSchool:this.school,
        courseGrade:this.grade,
        courseTerm:this.term,
        coursePrice:this.price,
        coursePlaces:this.places,
        courseSubject:this.subject,
        courseTime:this.time,
        courseIntroduce:this.introduce,
        courseDate:this.value

      })
      if(result.data.code==0){
        alert('保存成功!')
        this.$router.push({name:'course'})
      }else{
        alert('该编号已存在请换一个!')
      }
    },
    cancel(){
              this.$router.push({name:'course'})


    },

    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      console.log(fileList)
      this.fileList = fileList;
      this.img= this.fileList[0].thumbUrl
    },
     getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return style;
    },
  },

}
</script>

<style lang='scss' scoped>
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.add-course{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  li{
    list-style: none;
    display: flex;
      align-items: center;
    // justify-content: center;
  }
  .list-pic{
    display: flex;
  
    span{
      margin-top: 16px;
    }
  }
  .ant-upload-picture-card-wrapper{
    display: flex;
  }
}
ul{
  li{
    margin-top: 12px;
    label{
      width:90px ;
      height: 20px;
      font-size: 12px;
      line-height: 20px;
    }
    input[type="text"]{
      width: 200px;
      outline: none;
      border: 1px solid #999;
      margin-right: 5px;
    }
    input[type="checkbox"]{
      margin-left: 5px;
    }
    input[type="radio"]{
      margin-left: 5px;
    }
  }
}
.btn{
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    margin-left: 10px;
     width: 86px;
     height: 39px;
     background-color: rgb(16,142,233);
    text-align: center;
    line-height: 39px;
    border-radius: 5px;

  }
 
}
</style>