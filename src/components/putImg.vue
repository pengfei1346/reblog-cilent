<template>
  <div class="put">
    <!--//form提交-->
    <!--<form action="http://localhost:3000/api/putImg" method="post" enctype="multipart/form-data">-->
      <!--<input type="file" >-->
      <!--<button>提交</button>-->
    <!--</form>-->
    <label class="put-container">
      <div id="add" v-show="!img">+</div>
      <img :src="img" v-if="img">
      <input type="file" @change="handlePut($event)">
    </label>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "putImg",
    data() {
      return {
        img: ""
      }
    },
    methods: {
      handlePut($event) {
        console.log($event.target.files);
        let file = $event.target.files[0];

        let form = new FormData();
        form.append("pic", file)

        axios.post(
          '/api/putImg',
          form,
          {
            headers: {'content-type': "multipart/form-data"}
          }
        ).then(res => {
          console.log(res);
          this.img=`/api/${res.data.data}`
        })
      },
    }
  }
</script>

<style scoped lang="scss">

  .put-container{
    text-align: center;
    font-size: 30px;
    vertical-align: middle;
    font-weight: 100;
    display: block;
    color: #888;
    margin: 20px auto;
    border: 1px solid #888;
    width: 50px;
    height: 50px;
    line-height: 44px;
    img{
      width: 50px;
      height: 50px;
    }
    #id{
      width: 150px;
      height: 150px;
    }
    input{
      display: none;
    }
  }

</style>
