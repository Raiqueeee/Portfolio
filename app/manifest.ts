import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raique Babar - AI Engineer',
    short_name: 'Raique Babar',
    description:
      'AI Engineer building voice agents, intelligent automation, RAG systems, and applied machine learning products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#101010',
    theme_color: '#101010',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
