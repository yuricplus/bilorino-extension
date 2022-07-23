<template>
  <div class="container">
    <div class="box-field">
      <input type="text" placeholder="Digite o nome aqui" />
      <button>Change</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Bilorino',
    };
  },
  methods: {
    changeName() {
      document.body.innerHTML = document.body.innerHTML.replace(/Bolsonaro/g, this.name);
    },
  },
};
</script>
