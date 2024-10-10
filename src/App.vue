<script setup lang="ts">
import MindElixir from 'mind-elixir'
import { onMounted } from 'vue'
// 修改为build 生成配置的json 路径
import sources from './source/menus.json'
import { getQuery } from './utils'

let iniData: any = null
const originSource = sources as Record<string, any>
const firstValue = originSource[Object.keys(originSource)[0]]
document.title = `${firstValue.topic}-思维导图`
for (const key in originSource) {
  if (Object.prototype.hasOwnProperty.call(sources, key)) {
    const id = getQuery().id as string
    iniData = originSource[id] || firstValue
  }
}
onMounted(() => {
  const ME = new MindElixir({
    el: "#map",
    direction: MindElixir.SIDE,
    draggable: true, // default true
    contextMenu: false, // default true
    toolBar: true, // default true
    nodeMenu: false, // default true
    keypress: false, // default true
  });

  ME.init({
    nodeData: iniData,
    linkData: {},
    direction: 0
  });
  console.log("did mount", ME.getDataString());
})

</script>

<template>
  <div id="map"></div>
</template>
<style>
#map {
  width: 100%;
  height: 100vh;
}
</style>
