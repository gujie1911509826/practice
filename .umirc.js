
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/HookStudy', component: '../pages/HookStudy/index' },
        { path: '/RefPropsSendMessage', component: '../pages/RefPropsSendMessage/index' },
        { path: '/ReaactRoute', component: '../pages/ReaactRoute/index' },
        { path: '/time', component: '../pages/time/index' },
        { path: '/table', component: '../pages/table/index' },
        { path: '/class_1', component: '../pages/class_1/index' },
        { path: '/function_1', component: '../pages/function_1/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-dva',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
