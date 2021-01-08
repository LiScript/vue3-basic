<template>
  <div class="container">
    <GlobalHeader :user="user" />
    <ColumnList :list="list" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1专栏",
    description: "test1专栏的简介",
    avatar:"http://www.petsnet.cn/wp-content/uploads/2017/01/e76bc1db5286ebad2b8a5e3489fe1586.jpg",
  },
  {
    id: 2,
    title: "test2专栏",
    description: "test2专栏的简介"
  },
  {
    id: 3,
    title: "test3专栏",
    description: "test3专栏的简介",
    avatar:"http://www.petsnet.cn/wp-content/uploads/2017/01/e76bc1db5286ebad2b8a5e3489fe1586.jpg",
  },
  {
    id: 4,
    title: "test4专栏",
    description: "test4专栏的简介",
    avatar:"http://www.petsnet.cn/wp-content/uploads/2017/01/e76bc1db5286ebad2b8a5e3489fe1586.jpg",
  }
];
const userTestData: UserProps = {
  isLogin: true,
  name: 'Poli',
  id: 1089
}
export default defineComponent({
  name: "App",
  components: { ColumnList, GlobalHeader },
  setup() {
    return {
      list: testData,
      user: userTestData
    }
  }
});
</script>