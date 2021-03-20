var travel = new Vue({
  el: "#travel",
  data: {
    data:[],//預先定義變數

  },
  computed:{
      filterData(){
        const vm = this;
        return vm.data;
      }
  },
  created() {
    const vm = this;
    axios.get('https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      .then(function (response) {
        // handle success接收數據成功
        console.log(response);
        vm.data = response.data.data.XML_Head.Infos.Info;
        console.log(vm.data);
      })
      .catch(function (error) {
        // handle error接收數據失敗
        console.log(error);
      });
  },
});
