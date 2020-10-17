<template>
  <div class="add-course">
    <ul>
      <li>
        <label for="">新增轮播图标题</label>
        <input  type="text"
                v-model="name"
               placeholder="请输入">
      </li>
     
      <li class="list-pic">
                <label for="">轮播图</label>
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
        <label for="">轮播图状态</label>
        <input type="radio" v-model="picket" name="putaway" value="ON">ON
        <input type="radio" v-model="picket" name="putaway" value="OFF">OFF
      </li>
     
       
        <li><label for="">轮播图链接地址</label>
        <input v-model="site" type="text" placeholder="请输入地址">
        </li>
        <li>
          <label for="">排序</label>
          <input placeholder="数字越大越靠前" v-model="sort" >
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
import {ADD_BANNER,GET_INFO} from "../../api/url"
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
 created(){
   this.getuser()
  
  },
  data () {
    return {
      value:'',
       previewVisible: false,
      previewImage: '',
      fileList: [
      ],
      name:'',
      picket:"",
      site:"",
      sort:"",
      img:'',
      user:'',
      time:"",

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
    async getuser(){
       const result = await http.get(GET_INFO);
      this.user =  result.data.username
    },
   async submit(){
       var d = new Date();
     this.time = d.toLocaleString();
      const result = await  http.post(ADD_BANNER,{
        articleName:this.name,
        articleImg:this.img,
        articlePicket:this.picket,
        articleSite:this.site,
        articleSort:this.sort,
        articleUser:this.user,
        articleTime:this.time
      })
      if(result.data.code==0){
        alert('保存成功!')
        this.$router.push({name:'article'})
      }else{
        alert(result.data.message)
      }
    },
    cancel(){
              this.$router.push({name:'article'})


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