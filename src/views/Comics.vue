<template>
  <div class="container">
    <router-link to="/" tag="li" exact>
      <a>Home</a>
    </router-link>
    <message>Hello Vue</message>

    <ul>
      <li v-for="comic in comics">
        <p>Resource: {{comic.resourceURI}}</p>
        <p>Name: {{comic.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Message from '../components/Message';  // note the import of the component (you bring it in)
import Axios from 'axios';
import Routes from '../routes.js';

export default {
  components: { Message, Routes },  // AND also note the listing of the component (you use it)
  data () {
    return {
      comics: []
    }
  },
  mounted() {
    Axios.get('https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=2613d3beb415606554f219d832a23901')
      .then(response => this.comics = response.data.data.results[0].comics.items );
  }
}
</script>

<style lang="scss">

</style>
