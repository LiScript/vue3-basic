<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1> {{ count }}</h1>
  <h1> {{ double }}</h1>
  <p> {{ error }}</p>
  <ul>
    <li v-for="(item,index) in numbers" :key="index"> {{ item }} </li>
    <h1>{{ person.name }}</h1>
  </ul>
  <Modal :isOpen="modalIsOpen" @close-modal="onModalClose">
    Poli
  </Modal>
  <button @click="openModal">打开Modal</button>
  <!-- Suspense 新特性 -->
  <Suspense>
    <template #default>
      <!-- <async-show /> -->
      <dog-show />
    </template>
    <template #fallback>
      <h1>Loading ……</h1>
    </template>
  </Suspense>
  <!-- <AsyncShow /> -->
  <button @click="increase">+1</button>
  <h3> {{ greetings }}</h3>
  <button @click="updateGreeing">+999</button>
  <h1> x: {{x}} y: {{y}}</h1>
  <h1 v-if="loading">loading</h1>
  <img v-if="loaded" :src="result[0].url">
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, watch, onErrorCaptured } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import Modal from './components/Modal.vue'
// import AsyncShow from './components/AsyncShow.vue'
import DogShow from './components/DogShow.vue'
interface DataProps {
  count: number;
  increase: () => void;
  double: number;
  numbers: number[];
  person: { name?: string };
}
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: string;
  height: string;
}
export default ({
  name: 'App',
  setup() {
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
      return true
    })
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value *2
    // })
    // const increase = () => {
    //   count.value++
    // }
    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count *2),
      numbers: [0, 1 , 2],
      person: {}
    })
    data.numbers[0] = 5
    data.person.name = 'poli'
    const refData = toRefs(data)

    const greetings = ref('')
    const updateGreeing = () => {
      greetings.value += 'Hello! '
    }
    watch([greetings,()=>data.count],(newValue, oldValue) => {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
      document.title = 'Poli' + greetings.value + data.count
    })

    const {x , y} = useMousePosition()

    // const { result, loading, loaded } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    // watch(result, () => {
    //   if(result.value) {
    //     console.log(result.value.message)
    //   }
    // })
    const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if(result.value) {
        console.log(result.value[0].url)
      }
    })
    const modalIsOpen = ref(false)
    const openModal =() => {
      modalIsOpen.value = true
    }
    const onModalClose = () => {
      modalIsOpen.value = false
    }
    // refData.double
    return {
      ...refData,
      greetings,
      updateGreeing,
      x,
      y,
      result,
      loading,
      loaded,
      modalIsOpen,
      openModal,
      onModalClose,
      error
    }
  },
  components: {
    Modal,
    DogShow
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
