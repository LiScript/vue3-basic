<template>
  <div class="split-pane">
    <splitpane :splitSet="settingLR">
      <!-- #paneL 表示指定该组件为左侧面板 -->
      <template #paneL>
        <!-- 再次将右侧面板进行拆分 -->
        <splitpane :splitSet="settingTB">
          <template #paneL>
            <div class="dv-b">
              <vxe-table
                resizable
                show-overflow
                ref="xTree2"
                :tree-config="demo2.tableTreeConfig"
                :data="demo2.tableData"
              >
                <vxe-column
                  field="name"
                  title="Name"
                  tree-node
                >
                  <template #default="{ row }">
                    <span>
                      <template v-if="row.children && row.children.length">
                        <i
                          class="tree-node-icon fa"
                          :class="$refs.xTree2.isTreeExpandByRow(row) ? 'fa-folder-open-o' : 'fa-folder-o'"
                        ></i>
                      </template>
                      <template v-else>
                        <i class="tree-node-icon fa fa-file-o"></i>
                      </template>
                      <span>{{ row.name }}</span>
                    </span>
                  </template>
                </vxe-column>
                <vxe-column
                  field="size"
                  title="Size"
                ></vxe-column>
              </vxe-table>
            </div>
          </template>
          <template #paneR>
            <div class="dv-c">
              <el-collapse v-model="activeNames">
                <el-collapse-item
                  title="一致性 Consistency"
                  name="1"
                >
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item
                  title="反馈 Feedback"
                  name="2"
                >
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </template>
        </splitpane>
      </template>
      <template #paneR>
        <!-- 自定义左侧面板的内容 -->
        <div class="dv-a">A</div>
      </template>
      <!-- #paneR 表示指定该组件为右侧面板 -->

    </splitpane>
  </div>
</template>

<script lang="ts">
import splitpane, { ContextProps } from "/@/components/ReSplitPane";
import { reactive, ref } from "vue";
import { VxeTablePropTypes } from "vxe-table";
export default {
  name: "split",
  components: {
    splitpane
  },
  setup() {
    const activeNames = ref(["1"]);
    const settingLR: ContextProps = reactive({
      minPercent: 20,
      defaultPercent: 30,
      split: "vertical"
    });
    const demo2 = reactive({
      tableData: [
        {
          id: 1005,
          name: "Test2",
          type: "mp4",
          size: null,
          date: "2021-04-01",
          children: [
            {
              id: 24300,
              name: "Test3",
              type: "avi",
              size: 1024,
              date: "2020-03-01"
            },
            {
              id: 20045,
              name: "Test4",
              type: "html",
              size: 600,
              date: "2021-04-01"
            },
            {
              id: 10053,
              name: "Test96",
              type: "avi",
              size: null,
              date: "2021-04-01",
              children: [
                {
                  id: 24330,
                  name: "Test5",
                  type: "txt",
                  size: 25,
                  date: "2021-10-01"
                },
                {
                  id: 21011,
                  name: "Test6",
                  type: "pdf",
                  size: 512,
                  date: "2020-01-01"
                },
                {
                  id: 22200,
                  name: "Test7",
                  type: "js",
                  size: 1024,
                  date: "2021-06-01"
                }
              ]
            }
          ]
        }
      ],
      tableTreeConfig: {
        children: "children",
        iconOpen: "fa fa-minus-circle",
        iconClose: "fa fa-plus-circle",
        line: true
      } as VxeTablePropTypes.TreeConfig
    });

    const settingTB: ContextProps = reactive({
      minPercent: 20,
      defaultPercent: 60,
      split: "horizontal"
    });

    return {
      settingLR,
      settingTB,
      activeNames,
      demo2
    };
  }
};
</script>

<style lang="scss" scoped>
$W: 100%;
$H: 80vh;
.split-pane {
  width: 98%;
  height: $H;
  margin-top: 5px;
  text-align: center;
  font-size: 50px;
  color: #fff;
  .dv-a,
  .dv-b,
  .dv-c {
    width: $W;
    height: $W;
    background: rgba($color: dodgerblue, $alpha: 0.8);
    line-height: $H;
  }
  .dv-b,
  .dv-c {
    line-height: 250px;
  }
  .dv-b {
    background: rgba($color: #000, $alpha: 0.8);
  }
  .dv-c {
    background: rgba($color: #ce272d, $alpha: 0.8);
  }
}
</style>
