<template>
      <div class="container">
      <div class="row text-left text-dark">
          <div class="col-xl-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="p-3 name-bg3">
                <span class="font-weight-bold">{{name}} </span>
                <span style="font-size:12px">(Price:{{ price }} | Quantity {{quantity}})</span>
                </div>
                <div class="d-flex justify-content-between p-3 border">
                <div class="">
                    <input type="number" class="form-control" placeholder="Quantity">
                </div>
                <div class="btn1">
                    <b-button variant="danger">Sell</b-button>
                </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'EndDay',
    data(){
        return{
            name:'Google',
            price:200,
            quantity:10
        }
    }
}
</script>

<style>
.name-bg3{
    background-color: rgb(255, 181, 255);
}

</style>