import { defineConfig } from '@umijs/max';

export default defineConfig({
  locale: {
    default: 'en-US',
  },
  antd: {
    configProvider: {
      theme: {
        token: {
          colorPrimary: '#5C97F2',
          colorInfo: '#5C97F2',
          borderRadius: 2,
          wireframe: false,
        },
      },
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: 'item',
  },
  layout: {
    title: 'Evisas',
  },
  history: { type: 'hash' },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: '@/layouts/index',
      wrappers: ['@/wrappers/auth'],
      flatMenu: true,
      routes: [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: './Dashboard',
        },
        {
          path: '',
          redirect: '/visa/applications',
          hideInMenu: true,
        },
        {
          name: 'visa_applications',
          path: '/visa/applications',
          component: './VisaApplications/index.tsx',
        },
        {
          name: 'Details',
          path: '/visa/applications/:applicationNo',
          component: './VisaApplications/$id.tsx',
          hideInMenu: true,
        },
        {
          name: ' Settings',
          path: '/settings',
          component: './User/Settings',
          hideInMenu: true,
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: './Auth/Login',
      layout: false,
    },
    {
      name: 'forgot_password',
      path: '/forgot-password',
      component: './Auth/ForgotPassword',
      layout: false,
    },
    { path: '/*', component: '@/pages/404', layout: false },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
  esbuildMinifyIIFE: true,
});
