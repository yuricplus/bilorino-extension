<template>
  <div class="container">
    <img src="https://www.esmaelmorais.com.br/wp-content/uploads/2019/11/bozo-coringa-820x480.jpg" alt="bozo" width="400"/>
  </div>
</template>

<script>
import background from '../../../background';

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
  mounted() {
    console.log(background());
  },
};
</script>

<style lang="scss">
html {
  background: #003049;
}
.container {
  width: 400px;
  height: 300px;
  text-align: center;
  border-radius: 8px;
  background: #003049;
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
    }
  }

  h1,
  h3 {
    font-weight: bold;
    color: #fff;
  }
}
</style>
