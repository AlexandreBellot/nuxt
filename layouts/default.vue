<template>
  <div class="layout" :class="[NavIsOpen ? 'openNav' : 'closeNav']">
    <header class="siteHeader" >


      <div class="siteHeader-toggle" @click="toggleNav">
        <div class="firstBar"></div>
        <div class="thirdBar"></div>
      </div>


      <div class="siteHeader-menu">

        <nav>
          <ul>
            <li><nuxt-link @click.native="closeNav" to="/">Home</nuxt-link></li>
            <li><nuxt-link @click.native="closeNav" to="/about">About</nuxt-link></li>
            <li><nuxt-link @click.native="closeNav" to="/contact">Contact</nuxt-link></li>
          </ul>
        </nav>

      </div>

    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>

  import { MouseAnime, CustomPointer } from "~/plugins/animMouse.js";
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    data () {
      return {
        NavIsOpen: false
      }
    },
    computed : {
      ...mapGetters(['getMouseAnime']),
    },
    mounted () {
      this.$store.commit('setMouseAnime', new MouseAnime(
        '.blockbasline, .siteHeader-toggle, .siteHeader-menu a',
        8,
        true,
        0.4,
        0.3,
        new CustomPointer()
        )
      )

      this.getMouseAnime.load()

    },
    methods: {
      toggleNav () {
        this.NavIsOpen = !this.NavIsOpen
      },
      closeNav () {
        this.NavIsOpen = false
      }
    }
  }

</script>
