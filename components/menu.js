export const menuItems = [
  {
    id: 1,
    label: "menuitems.navigation.text",
    isTitle: true
  },
  {
    id: 2,
    label: "menuitems.dashboard.text",
    icon: "ri-dashboard-line",
    badge: {
      variant: "success",
      text: "menuitems.dashboard.badge"
    },
    isMenuCollapsed: false,
    subItems: [
      {
        id: 3,
        label: 'menuitems.dashboard.list.sales',
        link: '/'
      },
      {
        id: 4,
        label: 'menuitems.dashboard.list.crm',
        link: '/dashboard/crm'
      },
      {
        id: 5,
        label: 'menuitems.dashboard.list.analytics',
        link: '/dashboard/analytics'
      },
    ]
  },
  {
    id: 6,
    label: "menuitems.ecommerce.text",
    isTitle: true
  },

  {
    id: 7,
    label: "menuitems.ecommerce.Brands",
    icon: "fe-align-left",
    badge: {
      variant: "info",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 8,
        label: "menuitems.ecommerce.brands.brands",
        link: "/ecommerce/brands"
      }, {
        id: 9,
        label: 'menuitems.ecommerce.brands.createBrand',
        link: '/ecommerce/brands/create'
      },
    ]
  },
  {
    id: 10,
    label: "menuitems.ecommerce.Categories",
    icon: "fe-align-justify",
    badge: {
      variant: "info",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 11,
        label: "menuitems.ecommerce.categories.categories",
        link: "/ecommerce/categories"
      },
      {
        id: 12,
        label: "menuitems.ecommerce.subCategories.subCategories",
        link: "/ecommerce/subCategories"
      },
      {
        id: 13,
        label: "menuitems.ecommerce.subSubCategories.subSubCategories",
        link: "/ecommerce/subSubCategories"
      },
      {
        id: 14,
        label: "menuitems.ecommerce.categories.createCategory",
        link: "/ecommerce/categories/create"
      },
      {
        id: 15,
        label: "menuitems.ecommerce.subCategories.createSubCategories",
        link: "/ecommerce/subCategories/create"
      },
      {
        id: 16,
        label: "menuitems.ecommerce.subSubCategories.createSubSubCategories",
        link: "/ecommerce/subSubCategories/create"
      },
    ]
  },
  {
    id: 17,
    label: "menuitems.ecommerce.Products",
    icon: "ri-product-hunt-line",
    badge: {
      variant: "info",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 18,
        label: "menuitems.ecommerce.list.products",
        link: "/ecommerce/products"
      },
      {
        id: 19,
        label: "menuitems.ecommerce.list.productsgrid",
        link: "/ecommerce/products/products-grid"
      },
      {
        id: 20,
        label: 'menuitems.ecommerce.list.createproduct',
        link: '/ecommerce/products/product-create'
      },
    ]
  },
  {
    id: 21,
    label: "menuitems.ecommerce.Coupons",
    icon: "ri-coupon-2-line",
    badge: {
      variant: "info",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 22,
        label: "menuitems.ecommerce.coupons.coupons",
        link: "/ecommerce/coupons"
      },
      {
        id: 23,
        label: "menuitems.ecommerce.coupons.createCoupon",
        link: "/ecommerce/coupons/create"
      }
    ]
  },
  {
    id: 24,
    label: "menuitems.ecommerce.FlashDeals",
    icon: "ri-gift-2-line",
    badge: {
      variant: "danger",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 25,
        label: "menuitems.ecommerce.flashDeals.flashDeals",
        link: "/ecommerce/flashdeals"
      },
      {
        id: 26,
        label: "menuitems.ecommerce.flashDeals.createFlashDeal",
        link: "/ecommerce/flashdeals/create"
      }
    ]
  },
  {
    id: 27,
    label: "menuitems.ecommerce.Reviews",
    icon: "ri-star-s-line",
    badge: {
      variant: "danger",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 28,
        label: "menuitems.ecommerce.reviews.reviews",
        link: "/ecommerce/reviews"
      }
    ]
  },

  {
    id: 29,
    label: "menuitems.ecommerce.orders.text",
    isTitle: true
  },
  {
    id: 30,
    label: 'menuitems.ecommerce.orders.orders',
    icon: 'ri-shopping-cart-2-line',
    badge: {
      variant: "success",
      text: "menuitems.dashboard.badge"
    },
    link: '/ecommerce/orders'
  },
  {
    id: 31,
    label: 'menuitems.ecommerce.orders.sellersOrders',
    icon: ' ri-shopping-basket-2-line',
    badge: {
      variant: "success",
      text: "menuitems.dashboard.badge"
    },
    link: '/ecommerce/orders/sellerOrders'
  },
  {
    id: 32,
    label: "menuitems.tickets.text",
    isTitle: true
  },
  {
    id: 33,
    label: 'menuitems.tickets.tickets',
    icon: 'ri-chat-1-line',
    badge: {
      variant: "warning",
      text: "menuitems.ecommerce.badge"
    },
    link: '/ecommerce/tickets'
  },
  {
    id: 34,
    label: "menuitems.messages.text",
    isTitle: true
  },
  {
    id: 35,
    label: 'menuitems.messages.messages',
    icon: 'ri-message-line',
    badge: {
      variant: "warning",
      text: "menuitems.ecommerce.badge"
    },
    link: '/ecommerce/messages'
  },
  {
    id: 36,
    label: "menuitems.notifications.text",
    isTitle: true
  },
  {
    id: 37,
    label: 'menuitems.notifications.text',
    icon: 'ri-notification-2-line',
    badge: {
      variant: "warning",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 38,
        label: "menuitems.notifications.notifications",
        link: "/notifications"
      },
      {
        id: 39,
        label: "menuitems.notifications.createNotification",
        link: "/notifications/create"
      }
    ]
  },

  {
    id: 40,
    label: "menuitems.users.text",
    isTitle: true
  },
  {
    id: 41,
    label: "menuitems.users.Customers",
    icon: "ri-user-heart-line",
    badge: {
      variant: "info",
      text: "menuitems.ecommerce.badge"
    },
    link: "/customers"
  },
  {
    id: 42,
    label: "menuitems.users.Sellers",
    icon: "ri-user-follow-line",
    badge: {
      variant: "warning",
      text: "menuitems.ecommerce.badge"
    },
    link: "/sellers"
  },
  {
    id: 43,
    label: "menuitems.users.Affilates",
    icon: "ri-user-follow-line",
    badge: {
      variant: "danger",
      text: "menuitems.ecommerce.badge"
    },
    link: "/affilates"
  },
  {
    id: 44,
    label: "menuitems.users.Staffs",
    icon: "ri-user-settings-line",
    badge: {
      variant: "success",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 45,
        label: "menuitems.users.staffs.staffs",
        link: "/staffs"
      },
      {
        id: 46,
        label: "menuitems.users.staffs.createStaff",
        link: "/staffs/create"
      }
    ]
  },

  {
    id: 47,
    label: "menuitems.governorates.text",
    isTitle: true
  },
  {
    id: 48,
    label: "menuitems.governorates.Countries",
    icon: "ri-government-line",
    badge: {
      variant: "info",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 49,
        label: "menuitems.governorates.countries.countries",
        link: "/governorates/countries"
      },
      {
        id: 50,
        label: "menuitems.governorates.countries.createCountry",
        link: "/governorates/countries/create"
      }
    ]
  },
  {
    id: 51,
    label: "menuitems.governorates.Cities",
    icon: "ri-hotel-line",
    badge: {
      variant: "warning",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 52,
        label: "menuitems.governorates.cities.cities",
        link: "/governorates/cities"
      },
      {
        id: 53,
        label: "menuitems.governorates.cities.createCity",
        link: "/governorates/cities/create"
      }
    ]
  },
  {
    id: 54,
    label: "menuitems.governorates.Areas",
    icon: "ri-building-line",
    badge: {
      variant: "danger",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 55,
        label: "menuitems.governorates.areas.areas",
        link: "/governorates/areas"
      },
      {
        id: 56,
        label: "menuitems.governorates.areas.createArea",
        link: "/governorates/areas/create"
      }
    ]
  },
  {
    id: 57,
    label: "menuitems.governorates.Currencies",
    icon: "ri-currency-line",
    badge: {
      variant: "success",
      text: "menuitems.ecommerce.badge"
    },
    isMenuCollapsed: true,
    subItems: [
      {
        id: 58,
        label: "menuitems.governorates.currencies.currencies",
        link: "/governorates/currencies"
      },
      {
        id: 59,
        label: "menuitems.governorates.currencies.createCurrency",
        link: "/governorates/currencies/create"
      }
    ]
  },


];

