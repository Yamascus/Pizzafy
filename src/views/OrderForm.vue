<template>
  <v-card flat width="100%">
    <v-card-title class="justify-center">
      <h2>Make order</h2>
    </v-card-title>

    <v-card flat>
      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-subtitle class="currency-rub">
        {{ product.price }}
      </v-card-subtitle>

      <v-card-text>
        <v-text-field
          v-model="street"
          label="Street"
          :rules="[
            () => !!street || 'This field is required',
            () =>
              (!!street && street.length >= streetLengthMin) ||
              `Street name must be at least ${streetLengthMin} characters`,
            () =>
              (!!street && street.length <= streetLengthMax) ||
              `Street name must be no more than ${streetLengthMax} characters`,
          ]"
          :counter="streetLengthMax"
          required
        />
        <v-text-field
          v-model="house"
          label="House"
          :rules="[() => !!house || 'This field is required']"
          required
        />
        <v-text-field
          v-model="flat"
          label="Flat"
          :rules="[() => !!flat || 'This field is required']"
          required
        />
      </v-card-text>

      <v-card-actions>
        <v-btn color="error" :to="{ name: routeNames.Index }"> Cancel </v-btn>

        <v-spacer />

        <v-btn color="primary" :disabled="!isFormValid" @click="makeOrder">
          Make order
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Product } from '@/components/ProductList/types';
import { routeNames } from '@/router';

@Component
export default class OrderForm extends Vue {
  private routeNames = routeNames;
  private streetLengthMin = 3;
  private streetLengthMax = 100;
  private product: Product = {
    id: '',
    name: '',
    price: undefined,
    img: '',
  };

  private street = '';
  private house = '';
  private flat = '';

  private get isFormValid() {
    return !!(
      this.street &&
      this.street.length >= this.streetLengthMin &&
      this.street.length <= this.streetLengthMax &&
      this.house &&
      this.flat
    );
  }

  protected makeOrder() {
    alert('Thank you, come again!');
  }

  protected mounted() {
    this.product = JSON.parse(localStorage.getItem('product') || '');
  }
}
</script>
