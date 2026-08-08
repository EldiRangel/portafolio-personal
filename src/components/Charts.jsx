import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Datos actualizados con los lenguajes de programación reales
const techData = [
  { name: 'JavaScript', value: 2 }, // Visualizador y Portafolio
  { name: 'Java', value: 1 },       // Casino
  { name: 'TypeScript', value: 1 }, // Gestor de Contactos
  { name: 'Otros (C#/C++)', value: 1 } // Yakuza Game
];

// Ahora tienes 5 proyectos terminados en total
const statusData = [
  { name: 'Terminado', cantidad: 5 },
  { name: 'En desarrollo', cantidad: 0 }
];

// Colores ampliados para el gráfico de torta
const COLORS = ['#F7DF1E', '#b07219', '#3178C6', '#8884d8'];

export const TechnologyChart = () => {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={techData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {techData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const StatusChart = () => {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <BarChart
          data={statusData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <XAxis dataKey="name" tick={{ fontSize: 14 }} />
          <YAxis allowDecimals={false} />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="cantidad" fill="#82ca9d" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};