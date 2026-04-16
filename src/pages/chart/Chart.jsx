import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { booksContext } from '../../contexts/book-list-data/BooksContext';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red','purple','green','blue','orange','cyan','magenta','yellow'];

// স্যাম্পল ডেটা
const data = [
  { name: 'Page A', uv: 3000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D', uv: 2780 },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];

// ত্রিভুজ আকৃতি তৈরির লজিক
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

// কাস্টম বার কম্পোনেন্ট
const TriangleBar = (props) => {
  const { x, y, width, height, index, isActive } = props;
  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke={color}
      strokeWidth={isActive ? 5 : 0}
      fill={color}
      style={{ transition: 'stroke-width 0.3s ease-out' }}
    />
  );
};

// বারের উপরের টেক্সট/লেবেল
const CustomColorLabel = (props) => {
  const { x, y, width, value, index } = props;
  const fill = colors[index % colors.length];
  return (
    <text x={x + width / 2} y={y} fill={fill} textAnchor="middle" dy={-10}>
      {value}
    </text>
  );
};

export default function ReagPagesBarChart() {

  const {readListData}=useContext(booksContext)



  return (
<section className=''>

      <div style={{ width: '90%', maxWidth:'1280px', margin:'80px auto', height: 400 ,overflow:'hidden'}} className='bg-gray-50 rounded-2xl py-5'>
      <ResponsiveContainer>
        <BarChart
          data={readListData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <Bar 
            dataKey="totalPages" 
            shape={<TriangleBar />} 
            activeBar 
          >
            <LabelList dataKey="uv" content={<CustomColorLabel />} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
</section>
  );
}