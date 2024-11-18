<template>
  <div id="app" class="common body-pc">
    <el-upload
      class="upload-demo"
      drag
      multiple
      :before-upload="() => false"
      :on-change="handleFileChange"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或<em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        支持多文件上传，默认压缩率为60%，可拖动修改！
      </div>
    </el-upload>

    <div class="slider-container">
      <input
        type="range"
        id="compressionRatio"
        min="0"
        max="100"
        v-model="compressionRatio"
        @input="updateCompressionRatio"
      />
      <span>{{ compressionRatio }}%</span>
    </div>

    <div id="preview"></div>
    <el-button
      type="success"
      icon="el-icon-download"
      @click="downloadCompressedImages"
    >
      下载压缩图片
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compressionRatio: 60,
    };
  },
  methods: {
    handleFileChange(file) {
      console.log("File changed:", file);
      // 添加文件处理逻辑
    },
    updateCompressionRatio() {
      console.log("Compression ratio updated:", this.compressionRatio);
      // 更新压缩比逻辑
    },
    downloadCompressedImages() {
      console.log("Downloading compressed images");
      // 添加下载逻辑
    },
  },
};
</script>

<style scoped>
@import '/css/imgc.style.css';
</style>
