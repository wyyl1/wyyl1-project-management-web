<script lang="ts">
import { onMounted } from 'vue';
import UrlTool from '../components/common/UrlTool.vue'
import Global from '../components//common/Global.vue'

export default {
    selectedMenu
}

// 选中菜单
function selectedMenu(id: string) {
    // let currentUrl = UrlTool.currentUrl();
    // let allHrefs = document.querySelectorAll('a.nav-link');

    // for (let i = 0; i < allHrefs.length; i++) {
    //     let sidebarHref = allHrefs[i].getAttribute('href') + '';
    //     sidebarHref = noParameterUrl(sidebarHref);

    //     if (currentUrl.indexOf(path) > -1) {
    //         console.log(currentUrl + ' ' + path)
    //         allHrefs[i].classList.add('active');
    //     }
    // }

    // 根据 id 修改css
    let aTag = document.getElementById(id);
    aTag.classList.add('active');
}


function noParameterUrl(url: string) {
    let index = url.indexOf('?');

    if (index != -1) {
        return url.substring(0, index);
    }

    return url;
}
</script>

<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
              <li class="nav-item menu-open">
                  <a href="#" class="nav-link active">
                      <i class="nav-icon fas fa-table"></i>
                      <p>
                          功能
                          <i class="fas fa-angle-left right"></i>
                      </p>
                  </a>
                  <ul class="nav nav-treeview">
                      <li class="nav-item">
                          <a id="functionPageList" href="/" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>功能列表</p>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a id="functionAdd" href="/function/add/" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>添加功能</p>
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>