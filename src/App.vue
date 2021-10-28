<template>
  <div class="app">
    <BasicInfo/>
    <PurchaseInfo/>
    <About/>
  </div>
</template>

<script>
import About from './components/About'
import BasicInfo from './components/BasicInfo'
import PurchaseInfo from './components/PurchaseInfo'
export default {
  name:'app',
  components:{PurchaseInfo,BasicInfo,About}
}
</script>

<style>
  .app{
    width: 50%;
    position: absolute;
    transform: translateX(50%);
}
</style>
