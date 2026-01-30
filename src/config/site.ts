export const site = {
  domain: 'app.flujooficial.com',
  canonical: 'https://app.flujooficial.com',
  brand: {
    name: 'Flujo TV',
    premiumLabel: 'Premium'
  },
  supportEmail: 'soporte@flujooficial.com',
  whatsappNumber: '51914326729',
  download: {
    downloaderCode: '',
    mobileApkHref: '/apk-movil.apk'
  },
  pricing: {
    currencyCode: 'USD',
    plans: [
      {
        id: '1m',
        name: '1 mes',
        price: 9,
        label: 'Para probar sin compromiso',
        features: [
          'Acceso a más de 3 mil canales.',
          'Hasta 3 pantallas simultáneas',
          'Calidad garantizada FHD/4K.',
          'Soporte 24/7.'
        ]
      },
      {
        id: '3m',
        name: '3 meses',
        price: 27,
        label: 'Recomendado',
        highlight: true,
        features: [
          'Acceso a más de 3 mil canales.',
          'Hasta 3 pantallas simultáneas',
          'Calidad garantizada FHD/4K.',
          'Soporte 24/7.'
        ]
      },
      {
        id: '6m',
        name: '6 meses',
        price: 49,
        label: 'Incluye 1 mes extra',
        features: [
          'Acceso a más de 3 mil canales.',
          'Hasta 3 pantallas simultáneas',
          'Calidad garantizada FHD/4K.',
          'Soporte 24/7.'
        ]
      },
      {
        id: '12m',
        name: '12 meses',
        price: 95,
        label: 'Incluye 2 meses extra',
        features: [
          'Acceso a más de 3 mil canales.',
          'Hasta 3 pantallas simultáneas',
          'Calidad garantizada FHD/4K.',
          'Soporte 24/7.'
        ]
      }
    ]
  }
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
