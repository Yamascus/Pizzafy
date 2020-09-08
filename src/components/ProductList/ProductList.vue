<template>
  <v-carousel
    :height="carouselHeight"
    hide-delimiter-background
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-flex class="i-wrapper">
        <v-card
          v-for="(item, i) in slide"
          :key="i"
          class="i-card"
          @click="makeOrder(item)"
        >
          <v-img
            :src="require(`@/assets/img/product/${item.img}`)"
            height="200"
          />
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle class="pb-1 currency-rub">
            {{ item.price }}
          </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '@/components/ProductList/types';
import { routeNames } from '@/router';

@Component
export default class ProductList extends Vue {
  @Prop({ required: true })
  list!: Product[];

  private get carouselHeight() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return 300;
      case 'sm':
        return 300;
      case 'md':
        return 600;
      case 'lg':
        return 600;
      case 'xl':
        return 600;
    }
  }

  private get amount() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return 1;
      case 'sm':
        return 2;
      case 'md':
        return 4;
      case 'lg':
        return 6;
      case 'xl':
        return 6;
    }
  }

  private get slides() {
    let result = [];

    for (let i = 0; i < this.list.length; i += this.amount) {
      result.push(this.list.slice(i, i + this.amount));
    }

    return result;
  }

  protected makeOrder(item: Product) {
    const product = JSON.stringify(item);
    localStorage.setItem('product', product);
    this.$router.push({ name: routeNames.OrderForm, params: { id: item.id } });
  }
}
</script>

<style lang="stylus">
.i-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
}

.i-card {
  width: 300px;
  height auto;
  max-height: 278px;
  margin 16px;
}
</style>
