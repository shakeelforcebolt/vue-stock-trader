<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
              <b-navbar-brand href="#"><router-link to="/stocktrader" class="text-white">Stock Trader</router-link></b-navbar-brand>

              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#" ><router-link to="/portfolio" class="text-white">Portfolio</router-link></b-nav-item>
                  <b-nav-item href="#"><router-link to="/stocks" class="text-white">Stocks</router-link></b-nav-item>
                  <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                  <b-nav-form>
                    <b-nav-item href="#"><router-link to="/endday" class="text-white">End Day</router-link></b-nav-item>
                  </b-nav-form>

                  <b-nav-item-dropdown text="Save & Load" right>
                    <b-dropdown-item href="#">Save Data</b-dropdown-item>
                    <b-dropdown-item href="#">Load Data</b-dropdown-item>
                  </b-nav-item-dropdown>
                  <b-nav-item href="#"><b>Funds: ${{data}}</b></b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
      <div class="row p-4">
        <div class="col-md-12">
          <transition name="trade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      data:8.980
    }
  },
  components: {
    // HelloWorld
  },
  created(){
    this.$store.dispatch('initStocks')
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}


.trade-enter-active{
  animation: trade-out 1s ease-out forwards;

}
.trade-leave-active{
  animation: trade-in .5s ease-out forwards;

}
@keyframes trade-in {
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}
@keyframes trade-out {
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px)
  }
}
</style>
