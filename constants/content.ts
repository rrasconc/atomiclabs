import type { ServiceGroup } from './types';

const conquistaImg = require('../assets/conquista.png');
const exploraImg = require('../assets/explora.png');
const imaginaImg = require('../assets/imagina.png');

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: 'IMAGINA',
    services: [
      'Estrategia Digital',
      'Big Data & Analysis',
      'Consultoría Tecnológica',
      'Reducción de costos TI',
    ],
    image: imaginaImg,
  },
  {
    title: 'EXPLORA',
    services: ['Innovación y creación tecnológica', 'UI/UX', 'Innovación'],
    image: exploraImg,
  },
  {
    title: 'CONQUISTA',
    services: [
      'Desarrollo tecnológico y creación tecnológica',
      'Ciberseguridad',
      'Servicios de la Nube',
    ],
    image: conquistaImg,
  },
];
