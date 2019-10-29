<template>
  <div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <AppItemList title="Prefixos" :items="items.prefix" type="prefix" @addItem="addItem" @deleteItem="deleteItem"></AppItemList> 
          </div>
          <div class="col-md">
            <AppItemList title="Sufixos" :items="items.sufix" type="sufix" @addItem="addItem" @deleteItem="deleteItem"></AppItemList>
          </div>
        </div>
      <br/>
      <h5>Domínios <span class="badge badge-info">{{domains.length}}</span></h5>
      <div class="card">
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="domain in domains" :key="domain.name">
              <div class="row">
                <div class="col-md">
                  {{domain.name}}
                </div>
                <div class="col-md text-right">
                  <a class="btn btn-info" :href="domain.checkout" target="blank">
                    <span class="fa fa-shopping-cart"></span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios/dist/axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import AppItemList from './AppItemList';

export default {
  name: 'app',
  components: {
    AppItemList
  },
  data: () => ({
    prefix: '',
    sufix: '',
    items: {
      prefix: [],
      sufix: [],
    }
  }),

  methods: {

    addItem(item){
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            mutation ($item: ItemInput){
              newItem : saveItem(item: $item){
                id
                type
                description
              }
            }
          `,
          variables: {
            item: {
              type: item.type,
              description: item.description
            }
          }
        }
      }).then(response => {
        const query = response.data;
        const newItem = query.data.newItem;
        this.items[item.type].push(newItem);


      });
      this.prefix = '';
    },

    deleteItem(item){
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            mutation ($id: Int){
              deleted: deleteItem(id: $id)
            }
          `,
          variables: {
            id: item.id
          }
        }
      }).then(response => {
        const query = response.data;
        const deleted = query.data;
        if(deleted){
          this.items[item.type].splice(this.items[item.type].indexOf(item), 1);
        }
      });
    },

    getItems(type){

      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            query ($type: String){
              items(type: $type){
                id
                type
                description
              }
            }
          `,
          variables: {
            type
          }
        }
      }).then(response => {

        const query = response.data;
        this.items[type] = query.data.items;
      });
    }
  },

  computed: {

    domains(){
      const domains = [];
      for(const prefix in this.items.prefix){
        for(const sufix in this.items.sufix){
          const name = this.items.prefix[prefix].description + this.items.sufix[sufix].description;
          const url = name.toLowerCase();
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`;
          domains.push({ name, checkout });
        }
      }

      return domains;
    }
  },

  created(){
    
    this.getItems('prefix');
    this.getItems('sufix');
  }
};
</script>

<style>

</style>
