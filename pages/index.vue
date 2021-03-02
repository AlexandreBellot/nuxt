<template>
  <div class="contentHome">
    <article class="spe">
      <div class="block">
        <div class="blockbasline">Hello !</div>
        <strong>Portfolio d'un passionné du web.</strong><br/>

        Après une formation en art appliqué, j'ai fait du web mon support d'expression favori.<br/>
        Coder, illustrer, partager, dessiner, se former, designer, manger, lire, surfer ...<br/>
        Bref, 5 ans d'expérience dans le web.

        <h1>Alexandre Bellot - web designer</h1>
        <span>Site en construction</span>

      </div>
    </article>
    <Product/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    computed : {
      ...mapGetters(['getMouseAnime']),
    },
    mounted() {
      if(this.getMouseAnime){
        this.getMouseAnime.refresh()
      }
    }
  }
</script>
