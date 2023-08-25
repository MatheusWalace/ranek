<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
      <p>{{produto.descricao}}</p>
      <h2 class="titulo">{{produto.nome}}</h2>
      <p class="preco">{{produto.preco}}</p>
    </div>
  </section>
</template>

<script>

import { api } from "@/services.js"
import { serializei } from "@/helpers.js"

export default {
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9
    }
  },
  computed: {
    url() {
      const quary = serializei(this.$router.quary)
     
      return `/produto?_limit=${this.produtosPorPagina}${quary}`
    }
  },
  methods: {
    getProdutos() {
      api.get(this.url).then(response => {
        this.produtos = response.data
      }) 
    }
  },
  watch: {
    url() {
      this.getProdutos()
    }
  },
  created() {
    this.getProdutos()
  }
}
</script>

<style>

</style>