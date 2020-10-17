<template>
  <div class="add-course">
    <ul>
      <li>
        <label for="">教师姓名</label>
        <input  type="text"
                v-model="name"
               placeholder="请输入">
      </li>
      <li>
        <label for="">手机号</label>
        <input type="text"
         v-model="phone"
               placeholder="请输入">
      </li>
      <li class="list-pic">
                <label for="">头像</label>
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
      <li><label>校区</label>
          <select v-model="school">
            <option value="">请选择校区</option>
            <option value="海淀校区">海淀校区</option>
            <option value="朝阳校区">朝阳校区</option>
            <option value="西城校区">西城校区</option>
            <option value="东城校区">东城校区</option>
            <option value="石景山校区">石景山校区</option>
          </select>
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
       <li><label>教师类型</label>
          <select v-model="type">
            <option value="">请选择教师类型</option>
            <option value="不限">不限</option>
            <option value="授课老师">授课老师</option>
            <option value="业务老师">业务老师</option>
          </select>
        </li>
      <li>
        <label for="">联系地址</label>
        <input v-model="site" type="text" placeholder="">
      </li>
      <li><label>学科</label>
          <select v-model="subject">
            <option value="">请选择学科</option>
            <option value="不限">不限</option>
            <option value="语文">语文</option>
            <option value="数学">数学</option>
            <option value="英语">英语</option>
          </select>
      </li>
      <li>
        <label for="">是否推荐到首页</label>
        <input type="radio" name="home" value="是" v-model="home">是
        <input type="radio" name="home" value="否" v-model="home">否
      </li>
        <li>
          <label for="">老师介绍</label>
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
import {ADD_TEACHERS} from "../../api/url"
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
      // 老师介绍
      introduce:'',
      // 推荐到首页
      home:'',
      // 学科
      subject:'',
      // 联系地址
      site:'',
      // 教师类型
      type:'',
      // 年级
      grade:'',
      // 校区
      school:'',
      // 头像
      img:'',
      // 手机号
      phone:'',
      // 教师名
      name:'',
    };
  },
    components:{
    [Upload.name]:Upload,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [Modal.name]:Modal,
    
  },
  mounted () { },
  methods: {
   async submit(){
      const result = await  http.post(ADD_TEACHERS,{
        teachersName:this.name,
        teachersPhone:this.phone,
        teachersImg:this.img,
        teachersSchool:this.school,
        teachersGrade:this.grade,
        teachersType:this.type,
        teachersSite:this.site,
        teachersSubject:this.subject,
        teachersHome:this.home,
        teachersIntroduce:this.introduce,

      })
      if(result.data.code==0){
        alert('保存成功!')
        this.$router.push({name:'teachers'})
      }else{
        alert(result.data.message)
      }
    },
    cancel(){
              this.$router.push({name:'teachers'})


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
  margin-left: -24px;
  padding-bottom: 50px;
  position: absolute;
  width: 100%;
  // height: 100%;
  background-color: white;
  z-index: 10;
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