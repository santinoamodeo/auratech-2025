// dashboard.js
import { requireAuth, setupLogout } from './auth.js';

requireAuth();
setupLogout('#logout-btn');

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('cards-grid');
  const cards = [
    { title: 'Calculadora de Resistencia', link: 'calculadora.html', icon: 'fas fa-calculator' },
    { title: 'Capacitaciones', link: 'capacitaciones.html', icon: 'fas fa-chalkboard-teacher' },
    { title: 'Órdenes de Trabajo', link: 'ordenes.html', icon: 'fas fa-clipboard-list' },
    { title: 'Gráficas de Resistencia/Temp', link: 'graficas.html', icon: 'fas fa-chart-line' },
    { title: 'Próximamente', link: '#', icon: 'fas fa-hourglass-half' },
    { title: 'Próximamente', link: '#', icon: 'fas fa-hourglass-half' },
  ];

  cards.forEach(c => {
    const a = document.createElement('a');
    a.href = c.link;
    a.className = "bg-white rounded shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center";
    a.innerHTML = `<i class="text-4xl mb-4 ${c.icon} text-blue-600"></i><h4 class="font-semibold">${c.title}</h4>`;
    grid.append(a);
  });
});
