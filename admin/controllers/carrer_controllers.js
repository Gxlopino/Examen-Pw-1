// admin/controllers/carrer_controllers.js

export function home(req, res) {
  let carrers=[
  {
    "id": 1,
    "name": "Ingeniería de Sistemas"
  },
  {
    "id": 2,
    "name": "Ingeniería Industrial"
  },
  {
    "id": 3,
    "name": "Ingeniería Civil"
  },
  {
    "id": 4,
    "name": "Ingeniería Electrónica"
  },
  {
    "id": 5,
    "name": "Ingeniería Mecánica"
  },
  {
    "id": 6,
    "name": "Ingeniería Ambiental"
  },
  {
    "id": 7,
    "name": "Ingeniería de Software"
  },
  {
    "id": 8,
    "name": "Administración"
  },
  {
    "id": 9,
    "name": "Contabilidad"
  },
  {
    "id": 10,
    "name": "Economía"
  },
  {
    "id": 11,
    "name": "Derecho"
  },
  {
    "id": 12,
    "name": "Arquitectura"
  },
  {
    "id": 13,
    "name": "Psicología"
  },
  {
    "id": 14,
    "name": "Medicina Humana"
  },
  {
    "id": 15,
    "name": "Enfermería"
  },
  {
    "id": 16,
    "name": "Marketing"
  },
  {
    "id": 17,
    "name": "Comunicaciones"
  },
  {
    "id": 18,
    "name": "Diseño Gráfico"
  },
  {
    "id": 19,
    "name": "Negocios Internacionales"
  },
  {
    "id": 20,
    "name": "Ciencias Políticas"
  }
];

  return res.render('admin/carrers', {
    title: 'Admin  carrers',
    carrers: carrers,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}