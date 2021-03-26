<script lang="ts">
import { defineComponent } from "vue"
import { useHead } from "ream/app"

export default defineComponent({
  setup() {
    useHead({
      title: "Ream Serverless",
    })
  },
})
</script>

<template>
  <div>
    <h1>Hello Ream + Vercel!</h1>
    <a href="/api/hello">Go to the API page: /api/hello</a>
  </div>
</template>
