<template>
  <div class="section">
    <h2 class="subtitle">Unesite ime tražene osobe</h2>
    <input class="text light" placeholder="Pretraži..." />
    <p class="text" v-for="item in items" :key="item.id">{{item.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      items: [
        {
          name: 'Julije Ožegović',
          Soba: 'B502',
        },
        {
          name: 'Ivica Puljak',
          Soba: 'B601',
        },
        {
          name: 'Slavko Vujević',
          Soba: 'B704',
        },
      ],
    };
  },
};
</script>
