<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="text-center my-4" style="color: snow">Simple Cart Vuex V5</h1>
      <div
        class="col-2 mr-3 mb-2"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card" style="width: 10rem">
          <img :src="product.url" class="card-img-top" />
          <div class="card-body">
            <h6 class="card-title font-weight-bold text-center">
              {{ product.name }}
            </h6>
            <p class="text-center">${{ product.price }}</p>
            <div class="d-flex justify-content-center">
              <button
                href="#"
                class="btn btn-outline-warning"
                @click="addToCart(product)"
              >
                <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <table class="table text-center bg-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody v-if="carts.length > 0">
          <tr
            v-for="(item, index) in carts"
            :key="index"
            style="vertical-align: middle"
          >
            <th scope="row">{{ index + 1 }}</th>
            <th scope="row">
              <img :src="item.url" style="width: 4rem" />
            </th>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button
                class="btn btn-sm equal-size-button text-white"
                @click="setQuantity({ id: item.id, quantity: -1 })"
              >
                -
              </button>
              {{ item.quantity >= 1 ? item.quantity : removeFormCart(item) }}
              <button
                class="btn btn-sm equal-size-button text-white"
                size="sm"
                @click="setQuantity({ id: item.id, quantity: 1 })"
              >
                +
              </button>
            </td>
            <td>
              <button
                class="btn btn-outline-danger"
                @click="removeFormCart(item)"
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="6" style="text-align: center">Cart is empty</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col text-center">
          <h4 class="text-white">TOTAL: {{ totalCart(carts) }}$</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default ("Cart",
{
  computed: mapGetters(["products", "carts"]),
  methods: {
    ...mapActions(["addToCart", "setQuantity", "removeFormCart"]),
    ...mapMutations(["TOTAL_CART"]),
  },
  setup() {
    const totalCart = (cart) => {
      let total = 0;
      cart.forEach((item) => {
        total +=
          item.quantity * item.price >= 0 ? item.quantity * item.price : 0;
      });
      return total;
    };
    return {
      totalCart,
    };
  },
});
</script>
