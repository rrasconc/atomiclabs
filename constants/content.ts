import type { ServiceGroup, TeamMember } from './types';

const imaginaImg = require('../assets/imagina.png');
const exploraImg = require('../assets/explora.png');
const conquistaImg = require('../assets/conquista.png');

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

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ramón Gómez',
    position: 'Front-end developer',
    image: imaginaImg,
  },
  {
    name: 'Ximena Mejía',
    position: 'UX Designer',
    image: exploraImg,
  },
  {
    name: 'Jaime Domínguez',
    position: 'Back-end developer',
    image: conquistaImg,
  },
];
