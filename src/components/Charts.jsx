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


const techData = [
  { name: 'TypeScript', value: 7 },
  { name: 'JavaScript', value: 3 },

];

const statusData = [
  { name: 'Terminado', cantidad: 3 },
  { name: 'En desarrollo', cantidad: 0 }
];

// Colores para el gráfico de torta
const COLORS = ['#0088FE', '#00C49F'];

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