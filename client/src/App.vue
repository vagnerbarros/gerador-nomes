<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>NameGator</h1>
      <br/>
      <h6 class="text-secondary">Gerador de Nome Utilizando Vue.js, GraphQL e Node.js</h6>
    </div>
    <div id="main">
      <AppDomainList></AppDomainList>
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import AppDomainList from './components/AppDomainList';

export default {
  name: 'app',
  components: {
    AppDomainList
  },
};
</script>

<style>

#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}

#main{
  background-color: #F1F1F1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
