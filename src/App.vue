<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>NameGator</h1>
      <br/>
      <h6 class="text-secondary">Gerador de Nome Utilizando Vue.js, GraphQL e Node.js</h6>
    </div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h5>Prefixos <span class="badge badge-info">{{prefixes.length}}</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" :key="prefix">
                    <div class="row">
                      <div class="col-md">
                        {{ prefix }}
                      </div>
                      <div class="col-md text-right">
                        <button class="btn btn-info" @click="deletePrefix(prefix)"><span class="fa fa-trash"></span></button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br/>
                <div class="input-group">
                  <input class="form-control" type="text" @keyup.enter="addPrefix(prefix)" v-model="prefix" placeholder="Digite o Prefixo" />
                  <div class="input-group-append">
                    <button class="btn btn-info" @click="addPrefix(prefix)"><span class="fa fa-plus"></span></button>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div class="col-md">
            <h5>Sufixos <span class="badge badge-info">{{sufixes.length}}</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" :key="sufix" >
                    <div class="row">
                      <div class="col-md">
                        {{ sufix }}
                      </div>
                      <div class="col-md text-right">
                        <button class="btn btn-info" @click="deleteSufix(sufix)"><span class="fa fa-trash"></span></button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br/>
                <div class="input-group">
                  <input class="form-control" v-model="sufix" type="text" @keyup.enter="addSufix(sufix)" placeholder="Digite o Sufixo" />
                  <div class="input-group-append">
                    <button class="btn btn-info" @click="addSufix(sufix)"><span class="fa fa-plus"></span></button>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      <br/>
      <h5>Domínios <span class="badge badge-info">{{domains.length}}</span></h5>
      <div class="card">
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="domain in domains" :key="domain">
              {{domain}}
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

export default {
  name: 'app',
  data: () => ({
    prefix: '',
    sufix: '',
    prefixes: [],
    sufixes: [],
    domains: []
  }),

  methods: {

    addPrefix(prefix){
      this.prefixes.push(prefix);
      this.prefix = '';
      this.generate();
    },

    addSufix(sufix){
      this.sufixes.push(sufix);
      this.sufix = '';
      this.generate();
    },

    deletePrefix(prefix){
      this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
      this.generate();
    },

    deleteSufix(sufix){
      this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
      this.generate();
    },

    generate(){
      this.domains = [];
      for(const prefix in this.prefixes){
        for(const sufix in this.sufixes){
          this.domains.push(this.prefixes[prefix] + this.sufixes[sufix]);
        }
      }
    }
  }
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
