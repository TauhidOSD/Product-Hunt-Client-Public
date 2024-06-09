
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure/useAxiosSecure";
import { PieChart, Pie, Cell, Legend} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Statistics = () => {
  const axiosSecure = useAxiosSecure();
  const [Cards, setCards] = useState([]);

  useEffect(() => {
    axiosSecure.get("/products")
      .then((data) => {
        console.log("Fetched Data:", data?.data); // Log fetched data
        setCards(data?.data);
      });
  }, []);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Calculate the count of products for each owner
  const ownerCounts = Cards.reduce((acc, card) => {
    acc[card.OwnerName] = (acc[card.OwnerName] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(ownerCounts).map(_id => ({
    name:_id,
    value: ownerCounts[_id],
   

  }));

  console.log("Pie Chart Data:", pieChartData); // Log pie chart data

  return (
    <div>
      this is pie chart {Cards?.length}
      <PieChart width={600} height={600}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
     
    </div>
  );
};

export default Statistics;


// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../../../hooks/useAxiosSecure/useAxiosSecure";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const Statistics = () => {
//   const axiosSecure = useAxiosSecure();
//   const [Cards, setCards] = useState([]);

//   useEffect(() => {
//     axiosSecure.get("/products")
//       .then((data) => {
//         console.log("Fetched Data:", data?.data); // Log fetched data
//         setCards(data?.data);
//       });
//   }, []);

//   const RADIAN = Math.PI / 180;
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   const pieChartData = Cards.map(data => ({
//     name: data?.P_name,
//     value: data?.OwnerName
//   }));

//   console.log("Pie Chart Data:", pieChartData); // Log pie chart data

//   return (
//     <div>
//       this is pie chart {Cards?.length}
//       <PieChart width={400} height={400}>
//         <Pie
//           data={pieChartData}
//           cx="50%"
//           cy="50%"
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {pieChartData.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default Statistics;



// // import { useEffect, useState } from "react";
// // import useAxiosSecure from "../../../../../hooks/useAxiosSecure/useAxiosSecure";
// // import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// // const Statistics = () => {

// //     const axiosSecure = useAxiosSecure();


// //   const [Cards, setCards] = useState([]);
// //   useEffect(() => {
// //     axiosSecure.get("/products")
// //       // .then((res) => res.json())
// //       .then((data) => setCards(data?.data));
// //   }, []);

// //   const RADIAN = Math.PI / 180;
// // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
// //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
// //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

// //   return (
// //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
// //       {`${(percent * 100).toFixed(0)}%`}
// //     </text>
// //   );
// // };

// //     const pieChartData =Cards.map(data =>{
        
// //         return {name: data?.P_name, value: data?.OwnerName}
// //     })

// //     return (
// //         <div>
// //             this is pic chart{Cards?.length}
// //             <PieChart width={400} height={400}>
// //           <Pie
// //             data={pieChartData}
// //             cx="50%"
// //             cy="50%"
// //             labelLine={false}
// //             label={renderCustomizedLabel}
// //             outerRadius={80}
// //             fill="#8884d8"
// //             dataKey="value"
// //           >
// //             {pieChartData.map((entry, index) => (
// //               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //             ))}
// //           </Pie>
// //         </PieChart>
// //         </div>
// //     );
// // };

// // export default Statistics;