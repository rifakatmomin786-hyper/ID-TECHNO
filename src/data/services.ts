export interface Service {
  id: string
  number: string
  title: string
  shortTitle: string
  description: string
  overview: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'it-hardware-sales-services',
    number: '01',
    shortTitle: 'Computer & IT Hardware',
    title:
      'Computer, Desktop, Laptop, Server & Workstation – Sales & Services',
    description:
      'Reliable IT hardware solutions for organizations, institutions and professional environments.',
    overview:
      'ID Technocom provides computer and IT hardware solutions designed around the operational requirements of organizations. We support the supply of desktops, laptops, servers, workstations and related IT equipment along with installation, configuration and technical assistance.',
    points: [
      'Desktop and computer systems',
      'Laptop supply and support',
      'Server solutions',
      'Workstations for professional applications',
      'Installation and configuration',
      'Hardware troubleshooting and technical support',
      'IT peripherals and accessories',
    ],
  },

  {
    id: 'annual-maintenance-contract',
    number: '02',
    shortTitle: 'Annual Maintenance Contract',
    title: 'Annual Maintenance Contract (AMC)',
    description:
      'Planned IT maintenance and technical support to help keep your infrastructure operational.',
    overview:
      'Our Annual Maintenance Contract services are designed for organizations that require regular technical assistance and preventive maintenance for their IT infrastructure. AMC support can cover computers, printers, servers, CCTV systems and other peripherals according to the agreed requirement.',
    points: [
      'Computer maintenance',
      'Printer maintenance',
      'Server support',
      'CCTV system support',
      'Peripheral troubleshooting',
      'Preventive maintenance',
      'Technical assistance and service support',
    ],
  },

  {
    id: 'electronic-waste-management',
    number: '03',
    shortTitle: 'Electronic Waste Management',
    title: 'Electronic Waste Management Solution',
    description:
      'Responsible management of obsolete, damaged and end-of-life electronic equipment.',
    overview:
      'ID Technocom provides electronic waste management solutions for organizations handling obsolete, damaged or end-of-life electronic equipment. Our approach focuses on organized collection, handling and responsible management of electronic waste.',
    points: [
      'Management of obsolete IT equipment',
      'Electronic waste collection support',
      'Handling of end-of-life equipment',
      'Organized e-waste management',
      'Support for institutional requirements',
      'Responsible disposal coordination',
    ],
  },

  {
    id: 'gem-it-products',
    number: '04',
    shortTitle: 'IT Products on GeM',
    title: 'IT Products & Accessories on GeM',
    description:
      'IT products and accessories supporting government and institutional procurement requirements through GeM.',
    overview:
      'We support government and institutional requirements for IT products and accessories through the Government e-Marketplace (GeM). Our focus is on helping organizations identify suitable products aligned with their technical and procurement requirements.',
    points: [
      'Computers and laptops',
      'IT peripherals and accessories',
      'Printers and related products',
      'Technology equipment',
      'Government procurement requirements',
      'Product selection based on requirement',
      'GeM-oriented IT product supply',
    ],
  },

  {
    id: 'rental-it-products',
    number: '05',
    shortTitle: 'Rental IT Products',
    title: 'Rental IT Products',
    description:
      'Flexible IT equipment rental solutions for temporary and project-based requirements.',
    overview:
      'Our rental IT product service provides organizations with flexible access to required equipment for temporary deployments, projects, events, training programs and short-term operational requirements.',
    points: [
      'Desktop computer rentals',
      'Laptop rentals',
      'Printer and peripheral requirements',
      'Temporary office setups',
      'Project-based IT requirements',
      'Events and training requirements',
      'Flexible short-term deployments',
    ],
  },

  {
    id: 'scanning-digitization',
    number: '06',
    shortTitle: 'Scanning & Digitization',
    title: 'Scanning & Digitization Services',
    description:
      'Professional document scanning and digitization solutions for organizational records.',
    overview:
      'ID Technocom provides scanning and digitization services to help organizations convert physical records into organized digital information. The service is suitable for government, institutional and organizational documentation requirements.',
    points: [
      'Document scanning',
      'Record digitization',
      'Large-volume document processing',
      'Digital document creation',
      'Organized digital records',
      'Institutional documentation support',
      'Digitization project requirements',
    ],
  },
]