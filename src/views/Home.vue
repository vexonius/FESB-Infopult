<template>
  <div class="container">
    <div class="column">
      <div class="section">
        <h2 class="subtitle">Unesite ime tražene osobe</h2>
        <div class="shadow">
        <input class="text light" placeholder="Pretraži..." />
        <div class="has-padding-16">
        <p class="text light hover-highlight" v-for="item in items" :key="item.id">
          {{item.soba}}, {{item.name}}
          </p>
        </div>
      </div>
      </div>
    </div>
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
          soba: 'B502',
        },
        {
          name: 'Ivica Puljak',
          soba: 'B601',
        },
        {
          name: 'Slavko Vujević',
          soba: 'B704',
        },
      ],
    };
  },
};
</script>
