import {
  createApp,
  ref,
  computed
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const productName = ref("");
    const productPrice = ref("");
    const allProducts = ref([]);

    const addProduct = () => {
      allProducts.value.push({
        "name" : productName.value,
        "price" : +productPrice.value,
      });

      //Limpiar campos
      productName.value = "";
      productPrice.value = "";

    };

    const getTotal = computed(()=>{
      //reduce "acumula" todos los valores de una Array en uno (los suma)
      //allProducts.value accede al valor
      //product.price itera los value numéricos de cada Objeto en la Array
      //el parámetro "total" se comporta como el acumulador al que sumar
      return allProducts.value.reduce((total, product) => total + product.price, 0)
    }
  )

    return {
      productName, 
      productPrice,
      allProducts,
      addProduct,
      getTotal
    };
  },
}).mount("#app");
