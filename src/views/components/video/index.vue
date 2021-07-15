<template>
  <div>
    <div id="mse"></div>
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
    >
      <el-collapse-item
        title="一致性 Consistency"
        name="1"
      >
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item
        title="可控 Controllability"
        name="4"
      >
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>卡片名称</span>
          <el-button
            class="button"
            type="text"
          >操作按钮</el-button>
        </div>
      </template>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import Player from "xgplayer/dist/simple_player";
import volume from "xgplayer/dist/controls/volume";
import playbackRate from "xgplayer/dist/controls/playbackRate";
import screenShot from "xgplayer/dist/controls/screenShot";
import { deviceDetection } from "/@/utils/deviceDetection";

export default {
  setup() {
    const activeNames = ref(["1"]);
    const handleChange = val => {
      console.log(val);
    };
    onMounted(() => {
      new Player({
        id: "mse",
        autoplay: false,
        screenShot: true,
        url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
        poster:
          "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        fluid: deviceDetection(),
        controlPlugins: [volume, playbackRate, screenShot],
        playbackRate: [0.5, 0.75, 1, 1.5, 2] //传入倍速可选数组
      });
    });
    return {
      activeNames,
      handleChange
    };
  }
};
</script>

<style lang="scss" scoped>
#mse {
  flex: auto;
}
</style>
