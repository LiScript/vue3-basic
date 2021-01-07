import {ref, onMounted, onUnmounted} from 'vue'
function useMousePosition() {
    const x = ref(0)
    const y = ref(0)
    const updatMouse = (e: MouseEvent) => {
      x.value = e.pageX
      y.value = e.pageY
    }
    onMounted(() => {
      document.addEventListener('click', updatMouse)
    })
    onUnmounted(() => {
      document.removeEventListener('click', updatMouse)
    })
    return { x, y }
}
export default useMousePosition