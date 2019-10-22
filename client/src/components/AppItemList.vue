<template>
  <div>
    <h5>{{title}} <span class="badge badge-info">{{items.length}}</span></h5>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in items" :key="item">
            <div class="row">
              <div class="col-md">
                {{ item }}
              </div>
              <div class="col-md text-right">
                <button class="btn btn-info" @click="deleteItem(item)"><span class="fa fa-trash"></span></button>
              </div>
            </div>
          </li>
        </ul>
        <br/>
        <div class="input-group">
          <input class="form-control" type="text" @keyup.enter="addItem(item)" v-model="item" placeholder="Digite o Item" />
          <div class="input-group-append">
            <button class="btn btn-info" @click="addItem(item)"><span class="fa fa-plus"></span></button>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  
  name: '',
  props: ['title', 'items'],
  
  data: () => ({

    item: ''
  }),

  methods: {

    addItem(item){
      this.$emit('addItem', item);
      this.item = '';
    },
    
    deleteItem(item){
      this.$emit('deleteItem', item);
    }
  }
};
</script>