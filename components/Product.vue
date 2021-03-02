<template>
    <div class="postList">
      <article class="item">
        <div class="item-title">testtitre</div>
        <div class="item-content">tergrztgzrg</div>
        <div class="item-exe">
          <div class="item-job">
              <i></i>
              <div class="item-jobLabel">item-jobLabel</div>
          </div>
        </div>

        <div class="item-logo"></div>
        <div class="item-img"></div>
      </article>

    </div>
</template>

<script>
    export default {
        name: "Product",
        data () {
          return {
            Product: [
              {
                titre: 'testtitre',
                content: '',
              }
            ]
          }
        },
      }
</script>
