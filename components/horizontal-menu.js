export const menuItems = [
  {
    id: 1,
    label: 'menuitems.dashboard.text',
    icon: 'ri-dashboard-line',
    subItems: [
      {
        id: 2,
        label: 'menuitems.dashboard.list.sales',
        link: '/'
      },
      {
        id: 3,
        label: 'menuitems.dashboard.list.crm',
        link: '/dashboard/crm'
      },
      {
        id: 4,
        label: 'menuitems.dashboard.list.analytics',
        link: '/dashboard/analytics'
      }
    ]
  },
  {
    id: 5,
    label: 'menuitems.ecommerce.text',
    icon: 'ri-apps-2-line',
    subItems: [
      {
        id: 7,
        label: "menuitems.ecommerce.Brands",
        icon: "ri-shopping-cart-2-line",
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
        icon: "ri-shopping-cart-2-line",
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
        icon: "ri-shopping-cart-2-line",
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
        icon: "ri-shopping-cart-2-line",
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
        icon: "ri-shopping-cart-2-line",
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
        icon: "ri-shopping-cart-2-line",
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
        id: 27,
        label: "menuitems.ecommerce.orders.text",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "danger",
          text: "menuitems.ecommerce.badge"
        },
        isMenuCollapsed: true,
        subItems: [
          {
            id: 30,
            label: 'menuitems.ecommerce.orders.orders',
            icon: 'ri-customer-service-2-line',
            badge: {
              variant: "success",
              text: "menuitems.dashboard.badge"
            },
            link: '/ecommerce/orders'
          },
          {
            id: 31,
            label: 'menuitems.ecommerce.orders.sellersOrders',
            icon: 'ri-customer-service-2-line',
            badge: {
              variant: "success",
              text: "menuitems.dashboard.badge"
            },
            link: '/ecommerce/orders/sellerOrders'
          },
        ]
      },
    ]
  },
  {
    id: 34,
    label: 'menuitems.users.text',
    icon: 'ri-pencil-ruler-2-line',
    subItems: [
      {
        id: 35,
        label: "menuitems.users.Customers",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "info",
          text: "menuitems.ecommerce.badge"
        },
        link: "/customers"
      },
      {
        id: 36,
        label: "menuitems.users.Sellers",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "warning",
          text: "menuitems.ecommerce.badge"
        },
        link: "/sellers"
      },
      {
        id: 27,
        label: "menuitems.users.Affilates",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "danger",
          text: "menuitems.ecommerce.badge"
        },
        link: "/affilates"
      },
      {
        id: 27,
        label: "menuitems.users.Staffs",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "success",
          text: "menuitems.ecommerce.badge"
        },
        isMenuCollapsed: true,
        subItems: [
          {
            id: 28,
            label: "menuitems.users.staffs.staffs",
            link: "/staffs"
          },
          {
            id: 28,
            label: "menuitems.users.staffs.createStaff",
            link: "/staffs/create"
          }
        ]
      },
    ]
  },
  {
    id: 54,
    label: 'menuitems.governorates.text',
    icon: 'ri-stack-line',
    subItems: [
      {
        id: 27,
        label: "menuitems.governorates.Countries",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "info",
          text: "menuitems.ecommerce.badge"
        },
        isMenuCollapsed: true,
        subItems: [
          {
            id: 28,
            label: "menuitems.governorates.countries.countries",
            link: "/governorates/countries"
          },
          {
            id: 28,
            label: "menuitems.governorates.countries.createCountry",
            link: "/governorates/countries/create"
          }
        ]
      },
      {
        id: 27,
        label: "menuitems.governorates.Cities",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "warning",
          text: "menuitems.ecommerce.badge"
        },
        isMenuCollapsed: true,
        subItems: [
          {
            id: 28,
            label: "menuitems.governorates.cities.cities",
            link: "/governorates/cities"
          },
          {
            id: 28,
            label: "menuitems.governorates.cities.createCity",
            link: "/governorates/cities/create"
          }
        ]
      },
      {
        id: 27,
        label: "menuitems.governorates.Areas",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "danger",
          text: "menuitems.ecommerce.badge"
        },
        isMenuCollapsed: true,
        subItems: [
          {
            id: 28,
            label: "menuitems.governorates.areas.areas",
            link: "/governorates/areas"
          },
          {
            id: 28,
            label: "menuitems.governorates.areas.createArea",
            link: "/governorates/areas/create"
          }
        ]
      },
      {
        id: 27,
        label: "menuitems.governorates.Currencies",
        icon: "ri-shopping-cart-2-line",
        badge: {
          variant: "success",
          text: "menuitems.ecommerce.badge"
        },
        isMenuCollapsed: true,
        subItems: [
          {
            id: 28,
            label: "menuitems.governorates.currencies.currencies",
            link: "/governorates/currencies"
          },
          {
            id: 28,
            label: "menuitems.governorates.currencies.createCurrency",
            link: "/governorates/currencies/create"
          }
        ]
      },
    ]
  },
  {
    id: 87,
    label: 'menuitems.pages.text',
    icon: 'ri-pages-line',
    subItems: [
          {
            id: 33,
            label: 'menuitems.tickets.tickets',
            icon: 'ri-customer-service-2-line',
            badge: {
              variant: "warning",
              text: "menuitems.ecommerce.badge"
            },
            link: '/ecommerce/tickets'
          },
          {
            id: 33,
            label: 'menuitems.messages.messages',
            icon: 'ri-customer-service-2-line',
            badge: {
              variant: "warning",
              text: "menuitems.ecommerce.badge"
            },
            link: '/ecommerce/messages'
          },
          {
            id: 33,
            label: 'menuitems.notifications.text',
            icon: 'ri-customer-service-2-line',
            badge: {
              variant: "warning",
              text: "menuitems.ecommerce.badge"
            },
            isMenuCollapsed: true,
            subItems: [
              {
                id: 28,
                label: "menuitems.notifications.notifications",
                link: "/notifications"
              },
              {
                id: 28,
                label: "menuitems.notifications.createNotification",
                link: "/notifications/create"
              }
            ]
          },
    ]
  }
];
