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
  }
};
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
}
html {
  background: #4F759B;
}
.container {
  width: 400px;
  height: 300px;
  text-align: center;
  border-radius: 8px;
  background: #4F759B;
  position: relative;

  .box-field {
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      padding: 10px;
      border-radius: 8px;
      border: none;
    }
    button {
      width: 100%;
      margin: 10px auto;
      border-radius: 8px;
      padding: 10px;
      border: none;
      font-weight: bold;
    }
  }

  h1,
  h3 {
    font-weight: bold;
    color: #fff;
  }
}
</style>
