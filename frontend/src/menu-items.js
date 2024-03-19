const menuItems = {
  items: [
    {
      id: 'navigation',
      title: '',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        },
      ]
    },
    {
      id: 'announcement',
      title: '',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'announcement',
          title: 'Announcement',
          type: 'item',
          icon: 'fa fa-bullhorn',
          url: '/app/announcement',  
        },
      ]
    },
    {
      id: 'ui-element',
      title: 'UI ELEMENT',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'evm-contracts',
          title: 'EVM Contracts',
          type: 'item',
          icon: 'feather icon-box',
          url:'/app/Evm-Contracts',
          // children: [
          //   {
          //     id: 'all',
          //     title: 'All Contracts',
          //     type: 'item',
          //     url:'/app/Evm-Contracts',
          //   },
          //   {
          //     id: 'uniswap',
          //     title: 'Uniswap',
          //     type: 'item',
          //     url: '/basic/button'
          //   },
          //   {
          //     id: 'curveSwap',
          //     title: 'CurveSwap',
          //     type: 'item',
          //     url: '/basic/badges'
          //   },
          //   {
          //     id: 'makerDao',
          //     title: 'MakerDao',
          //     type: 'item',
          //     url: '/basic/breadcrumb'
          //   },
          //   {
          //     id: 'aave',
          //     title: 'Aave',
          //     type: 'item',
          //     url: '/basic/pagination'
          //   },
          //   {
          //     id: 'supplyInfo',
          //     title: 'SupplyInfo',
          //     type: 'item',
          //     url: '/basic/collapse'
          //   },
          //   {
          //     id: 'transfer',
          //     title: 'Transfer',
          //     type: 'item',
          //     url: '/basic/tabs-pills'
          //   },
          //   {
          //     id: 'stake',
          //     title: 'Stake',
          //     type: 'item',
          //     url: '/basic/typography'
          //   },
          //   {
          //     id: 'mint',
          //     title: 'Mint',
          //     type: 'item',
          //     url: '/basic/typography'
          //   }
          // ]
        }
      ]
    },
    {
      id: 'ui-forms',
      title: 'FORMS & TABLES',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'sol-contract',
          title: 'Solana Contracts',
          type: 'item',
          icon: 'feather icon-box',
          url: '/forms/form-basic'
        },
        {
          id: 'chat',
          title: 'Chatting',
          type: 'item',
          icon: 'fa fa-comments',
          url: '/tables/bootstrap'
        }
      ]
    },
    {
      id: 'chart-maps',
      title: 'Chart & Maps',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'trade',
          title: 'Trade Detail',
          type: 'item',
          icon: 'fa fa-balance-scale',
          url: '/charts/nvd3'
        },
        {
          id: 'blog',
          title: 'Blog',
          type: 'item',
          icon: 'fa fa-comment',
          url: '/maps/google-map'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'my-act',
          title: 'My activities',
          type: 'collapse',
          icon: 'fa fa-history',
          badge: {
            title: 'New',
            type: 'label-danger'
          },
          children: [
            {
              id: 'transaction',
              title: 'Transactions',
              type: 'item',
              url: '/auth/signup-1',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'history',
              title: 'History',
              type: 'item',
              url: '/auth/signin-1',
              target: true,
              breadcrumbs: false
            }
          ]
        },
        {
          id: 'wallet-info',
          title: 'Wallet Info',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'fa fa-credit-card'
        },
        {
          id: 'documentation',
          title: 'Whitepaper',
          type: 'item',
          icon: 'fa fa-book',
          classes: 'nav-item',
          url: '',
          target: true,
          external: true
        },
        {
          id: 'user',
          title: 'User',
          type: 'collapse',
          icon: 'fa fa-user-circle',
          children: [
            {
              id: 'profile',
              title: 'Profile',
              type: 'item',
              url: '#!'
            },
            {
              id: 'login',
              title: 'Sign In',
              type: 'item',
              url: '/auth/signin-1',
            },
            {
              id: 'logout',
              title: 'Sign Out',
              type: 'item',
              url: '/auth/signup-1',
            },
          ]
        },
      ]
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'setting',
          title: 'Setting',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'fa fa-cog'
        },
        {
          id: 'help',
          title: 'Help',
          type: 'item',
          icon: 'fa fa-question-circle',
          classes: 'nav-item',
          url: '',
          target: true,
          external: true
        },
      ]
    },
    
  ]
};

export default menuItems;
