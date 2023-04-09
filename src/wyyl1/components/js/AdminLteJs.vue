<template>
<!-- jQuery -->
<remote-js  src="././plugins/jquery/jquery.min.js"></remote-js >
<!-- jQuery UI 1.11.4 -->
<remote-js  src="././plugins/jquery-ui/jquery-ui.min.js"></remote-js >
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<remote-js >
  $.widget.bridge('uibutton', $.ui.button)
</remote-js >
<!-- Bootstrap 4 -->
<remote-js  src="././plugins/bootstrap/js/bootstrap.bundle.min.js"></remote-js >
<!-- ChartJS -->
<remote-js  src="././plugins/chart.js/Chart.min.js"></remote-js >
<!-- Sparkline -->
<remote-js  src="././plugins/sparklines/sparkline.js"></remote-js >
<!-- JQVMap -->
<remote-js  src="././plugins/jqvmap/jquery.vmap.min.js"></remote-js >
<remote-js  src="././plugins/jqvmap/maps/jquery.vmap.usa.js"></remote-js >
<!-- jQuery Knob Chart -->
<remote-js  src="././plugins/jquery-knob/jquery.knob.min.js"></remote-js >
<!-- daterangepicker -->
<remote-js  src="././plugins/moment/moment.min.js"></remote-js >
<remote-js  src="././plugins/daterangepicker/daterangepicker.js"></remote-js >
<!-- Tempusdominus Bootstrap 4 -->
<remote-js  src="././plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></remote-js >
<!-- Summernote -->
<remote-js  src="././plugins/summernote/summernote-bs4.min.js"></remote-js >
<!-- overlayScrollbars -->
<remote-js  src="././plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></remote-js >
<!-- AdminLTE App -->
<remote-js  src="././dist/js/adminlte.js"></remote-js >
<!-- AdminLTE for demo purposes -->
<remote-js  src="././dist/js/demo.js"></remote-js >
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<remote-js  src="././dist/js/pages/dashboard.js"></remote-js >
</template>

<remote-js >
export default {
    components: {
    'remote-js': {
      render(createElement) {
        return createElement('remote-js ', {attrs: {type: 'text/javaremote-js ', src: this.src}});
      },
      props: {
        src: { type: String, required: true}
      }
    }
  }
}
</remote-js >
