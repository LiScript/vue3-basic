<template>
  <el-dialog
    title="当前认证Token"
    v-model="dialogVisible"
    width="30%"
  >
    <p>Token使用方式：在Http Request的Header中添加key为Authorization，value为Bearder {Token}的项即可。</p>
    <el-divider content-position="right">SmartQuality</el-divider>
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入内容"
      v-model="textarea"
    >
    </el-input>
    <el-button
      size="medium"
      type="success"
      plain
      @click="handleCopyInput(textarea, $event)"
    >复制</el-button>
    <!-- <el-button
      size="medium"
      type="success"
      plain
      @click="handleCopyAndopen(textarea, $event)"
    >复制并打开Swagger</el-button> -->
  </el-dialog>
</template>
<script lang="ts">
import { ref } from "vue";
import { emitter } from "/@/utils/mitt";
import { storageSession } from "/@/utils/storage";
import clipboard from "/@/utils/clipboard"; // use clipboard directly
export default {
  setup() {
    const dialogVisible = ref(false);
    const textarea = ref("");

    emitter.on("openToken", () => {
      dialogVisible.value = true;
      textarea.value = storageSession.getItem("info").accessToken;
    });
    /**
     * @description 处理复制输入框
     */
    const handleCopyInput = (content: any, event: any) => {
      const options = {
        successTip: "复制成功",
        failedTip: "复制失败"
      };
      clipboard(content, event, options);
    };
    const handleCopyAndopen = (content: any, event: any) => {
      const options = {
        successTip: "复制成功",
        failedTip: "复制失败"
      };
      clipboard(content, event, options);
      window.open(
        "http://10.136.50.130:8686/swagger/index.html?docExpansion=none"
      );
    };
    return {
      dialogVisible,
      textarea,
      handleCopyInput,
      handleCopyAndopen
    };
  }
};
</script>
