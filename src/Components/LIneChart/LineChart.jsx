import { LineChart as Lchart, Line,XAxis,YAxis, } from 'recharts';



const LineChart = () => {
  const studentMarks = [
    { student: "Student 1", math: 85, physics: 75, english: 90 },
    { student: "Student 2", math: 78, physics: 80, english: 85 },
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
    <div className='mt-8 mx-auto'>
      <Lchart width={1200} height={400} data={studentMarks}>
        <XAxis dataKey={'student'}></XAxis>
        <YAxis></YAxis>
      <Line type="monotone" dataKey="math" stroke="red" />
      <Line type='monotone' dataKey='physics' stroke='green'></Line>
      <Line type='monotone' dataKey='english' stroke='green'></Line>
      </Lchart>
    </div>
  );
};

export default LineChart;