<script setup>
import { onMounted } from 'vue'

import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import Poster from 'zan-poster/dist_miniprogram/poster'

/**
 * 海报模板
 */
import goods1 from './template/goods1'
import goods2 from './template/goods2'
import shaidan1 from './template/shaidan1'
import shaidan2 from './template/shaidan2'

const templates = {
  goods1,
  goods2,
  shaidan1,
  shaidan2,
}
const options = templates.goods1

let editor = null

onMounted(() => {
  const canvas = document.getElementById('myCanvas')
  if (!editor) {
    editor = new JSONEditor(
      document.getElementById('jsonview'),
      {
        onChangeJSON: (json) => {
          console.time('draw')
          Poster.draw(json, canvas)
          console.log(JSON.stringify(json))
          console.timeEnd('draw')
        },
      },
      options,
    )
    editor.expandAll()
  }
  else {
    editor.update(options)
  }

  console.time('draw')
  Poster.draw(options, canvas)
  console.timeEnd('draw')
})
</script>

<template>
  <div class="app-wrapper">
    <div class="view view-left">
      <canvas id="myCanvas" />
    </div>

    <div class="view view-right">
      <div id="jsonview" class="jsonview" />
    </div>
  </div>
</template>

<style lang="scss">
.app-wrapper {
  height: 100vh;
  display: flex;

  .view {
    padding: 20px;
    box-sizing: content-box;
  }

  .view-left {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .view-right {
    width: 50%;
  }

  .jsonview {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    box-sizing: border-box;
  }

  div.jsoneditor {
    border: none;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  }

  .jsoneditor-navigation-bar {
    display: none;
  }

  div.jsoneditor-menu {
    background-color: #333;
    border-color: #333;
    display: none;
  }

  canvas {
    box-shadow: 0 2px 35px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    height: 80vh;
    width: auto;
    max-width: 100%;
  }
}
</style>
