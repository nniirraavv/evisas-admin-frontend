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
          redirect: '/apply',
          hideInMenu: true,
        },
        {
          name: 'apply',
          path: '/apply',
          component: '@/pages/Apply/index',
        },
        {
          name: 'visas',
          path: '/apply/visa',
          component: './Apply/Visa',
          hideInMenu: true,
        },
        {
          name: 'create_visa_application',
          path: '/apply/visa/:id/:step',
          component: './Apply/Visa/$id.tsx',
          hideInMenu: true,
          routes: [
            {
              name: 'travel_details',
              path: 'travel_details',
              component:
                '@/components/Forms/Visa/VisaApplicationSteps/TripAndTravellerDetails_Step_One',
              hideInMenu: true,
            },
            {
              name: 'travel_details',
              path: ':applicationNo/travel_details',
              component:
                '@/components/Forms/Visa/VisaApplicationSteps/TripAndTravellerDetails_Step_One',
              hideInMenu: true,
            },
            {
              name: 'add_documents',
              path: ':applicationNo/add_documents',
              component:
                '@/components/Forms/Visa/VisaApplicationSteps/AddDocuments_Step_Two',
              hideInMenu: true,
            },
            {
              name: 'payment_summary',
              path: ':applicationNo/payment_summary',
              component:
                '@/components/Forms/Visa/VisaApplicationSteps/PaymentSummary_Step_Three',
              hideInMenu: true,
            },
          ],
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
          // routes: [
          //   {
          //     name: 'Details',
          //     path: ':visaId',
          //     component:
          //       '@/components/Forms/Visa/VisaSteps/TripAndTravellerDetails_Step_One',
          //     hideInMenu: true,
          //   },
          // ],
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
    {
      name: 'sign_up',
      path: '/sign-up',
      component: './Auth/Signup',
      layout: false,
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
  esbuildMinifyIIFE: true,
});
