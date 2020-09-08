<template>
  <v-card flat width="100%">
    <v-card-title class="justify-center">
      <h2>Choose your pizza</h2>
    </v-card-title>

    <product-list :list="list" />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductList from '@/components/ProductList';
import { Product } from '@/components/ProductList/types';

@Component({ components: { ProductList } })
export default class Main extends Vue {
  private list: Product[] = [];

  protected mounted() {
    this.list = [
      {
        id: '1',
        name: 'Четыре Сыра',
        price: 479,
        img: '4-cheese-traditional.jpg',
      },
      {
        id: '2',
        name: 'Мексиканская',
        price: 419,
        img: 'mexican-traditional.jpg',
      },
      {
        id: '3',
        name: 'Супер Чизбургер',
        price: 479,
        img: 'super-cheesburger-traditional.jpg',
      },
      {
        id: '4',
        name: 'Вегетарианская',
        price: 379,
        img: 'vegetarian-traditional.jpg',
      },
      {
        id: '5',
        name: 'Большая Бонанза',
        price: 439,
        img: 'big-bonanza-traditional.jpg',
      },
      {
        id: '6',
        name: 'Альфредо',
        price: 479,
        img: 'alfredo-traditional.jpg',
      },
      {
        id: '7',
        name: 'Пепперони',
        price: 399,
        img: 'pepperoni-traditional.jpg',
      },
    ];
  }
}
</script>
