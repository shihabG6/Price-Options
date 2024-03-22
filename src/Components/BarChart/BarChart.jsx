import{BarChart as Barchart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar }from 'recharts';
const BarCharts = () => {
  const studentMarks = [
    { student: "Niloy(66017)", math: 85, physics: 75, english: 90 },
    { student: "Abir()", math: 78, physics: 80, english: 85 },
    { student: "Student 3", math: 92, physics: 85, english: 88 },
    { student: "Student 4", math: 65, physics: 60, english: 70 },
    { student: "Student 5", math: 88, physics: 82, english: 75 },
    { student: "Student 6", math: 75, physics: 70, english: 80 },
    { student: "Student 7", math: 80, physics: 78, english: 92 },
    { student: "Student 8", math: 95, physics: 88, english: 85 },
    { student: "Student 9", math: 70, physics: 65, english: 75 },
    { student: "Student 10", math: 82, physics: 75, english: 80 }
];

  return (
    <div>
      <Barchart width={1200} height={250} data={studentMarks}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="student" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="math" fill="#8884d8" />
  <Bar dataKey="physics" fill="#82ca9d" />
  <Bar dataKey="english" fill="gray" />
</Barchart>
    </div>
  );
};

export default BarCharts;