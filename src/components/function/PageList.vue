<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2'
import Global from '../common/Global.vue'

const page = ref({});
const pageNum = ref(1);

// const pageInfo = reactive({page: {}});

let url = window.location.href 

onMounted(() => {
    getPage(pageNum.value);
});

function getPage(pageNum: number){
  let pageSize = 2;
  axios.get(Global.apiHost + '/api/function/page?pageNum=' + pageNum + '&pageSize=' + pageSize).then((response) => {
    page.value = response.data;
  });
}

function getParams(url: string, params: string){
      var res = new RegExp("(?:&|/?)" + params + "=([^&$]+)").exec(url);
      return res ? res[1] : '';
}

function perPage() {
    if (pageNum.value == 1) {
        Swal.fire({
          title: '已经是第一页了',
          icon: 'warning',
          confirmButtonText: '关闭'
        });
        return;
    }

    getPage(--pageNum.value);
}

function nextPage() {
    if (pageNum.value == page.value.pageTotal) {
        Swal.fire({
          title: '已经是最后一页了',
          icon: 'warning',
          confirmButtonText: '关闭'
        });
        return;
    }

    getPage(++pageNum.value);
}

</script>

<template>
    <!-- Main f -->
    <section class="f">
      <div class="container-fluid">
        <!-- /.row -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">查询条件</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>功能名称</th>
                      <th>功能发起人</th>
                      <th>参与人</th>
                      <th>平台</th>
                      <th>提测时间</th>
                      <th>发布时间</th>
                      <th>功能状态</th>
                      <th>是否延期</th>
                      <th>是否同步</th>
                      <th>备注</th>
                      <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="f in page.dataList" :key="f.id">
                      <td>{{f?.name}}</td>
                      <td>{{f?.originatorName}}</td>
                      <td>{{f?.participantNames}}</td>
                      <td>{{f?.platformName}}</td>
                      <td>
                          计划 {{f?.plannedTestDate}} 实际 {{f?.actualTestDate}}
                      </td>
                      <td>{{f?.plannedReleaseDate}}</td>
                      <td>{{f?.statusName}}</td>
                      <td>{{f?.delayed}}</td>
                      <td>{{f?.delayed}}</td>
                      <td>{{f?.remark}}</td>
                      <td>编辑 复制</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
      <div class="jsgrid-pager-container">
        <div class="jsgrid-pager">
          &nbsp;&nbsp;
          {{page.pageNum}} of {{page.pageTotal}}
          &nbsp;&nbsp;
          <span class="jsgrid-pager-nav-button"><a href="#" @click="perPage">上一页</a></span>
          &nbsp;&nbsp;
          <span class="jsgrid-pager-nav-button"><a href="#" @click="nextPage">下一页</a></span>
        </div>
    </div>
    </section>
    <!-- /.f -->
</template>

