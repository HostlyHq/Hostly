
const compareData = [{
    id: 'CD1',
    ours: true,
    heading: 'Hostly',
    deploy: 'Fast, optimized for apps sizes',
    server: 'Planned (node, Python, PHP support)',
    pricing: 'Affordable, transparent',
    tier: 'Custom (decide your own offer)',
    domain: 'Free domain',
    icons: {
        deploy: 'available.svg',
        server: 'available.svg',
        pricing: 'available.svg',
        tier: 'available.svg',
        domains: 'available.svg'
    }
},{
    id: 'CD2',
    ours: false,
    heading: 'Vercel',
    deploy: 'Very fast, great for Next.js',
    server: 'Mostly frontend/ serverless functions',
    pricing: 'Higher cost for scaling',
    tier: 'Free plan with 128GB badnwidth',
    domain: 'Yes (bring your own)',
    icons: {
        deploy: 'available.svg',
        server: 'not-available-icon.svg',
        pricing: 'not-available-icon.svg',
        tier: 'not-sure.svg',
        domains: 'not-available-icon.svg'
    }
},{
    id: 'CD3',
    ours: false,
    heading: 'Netlify',
    deploy: 'Fast, especially for JAMstack',
    server: 'Planned (node, Python, PHP support)',
    pricing: 'Moderate based on usage',
    tier: 'Free plan with 125k requests',
    domain: 'Yes (bring your own)',
    icons: {
        deploy: 'available.svg',
        server: 'not-available-icon.svg',
        pricing: 'available.svg',
        tier: 'not-available-icon.svg',
        domains: 'not-sure.svg'
    }
},{
    id: 'CD4',
    ours: false,
    heading: 'Render',
    deploy: 'Good slightly slower for big apps',
    server: 'Yes (full-stacking hosting)',
    pricing: 'Pay-as-you-go scalable',
    tier: 'Free plan with 750k (instance)',
    domain: 'Free domain',
    icons: {
        deploy: 'not-sure.svg',
        server: 'not-available-icon.svg',
        pricing: 'not-sure.svg',
        tier: 'not-sure.svg',
        domains: 'not-available-icon.svg'
    }
},]

export default compareData