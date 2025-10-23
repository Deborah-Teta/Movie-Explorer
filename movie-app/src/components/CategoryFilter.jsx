// import React from 'react'

// function CategoryFilter({ category, setCategory, movies }) {
//   const categories = [...new Set(movies.map((m) => m.genres).flat())];

//   return (
//    <>  
//     <select
//       value={category}
//       onChange={(e) => setCategory(e.target.value)}
//       className="border p-2 rounded mb-4"
//     >
//       <option value="">All Categories</option>
//       {categories.map((cat) => (
//         <option key={cat} value={cat}>{cat}</option>
//       ))}
//     </select>
//    </> 
//   );
// }
// export default CategoryFilter

import React from "react";

function CategoryFilter () {
    return(
        <>
          <select >
            <option value=''></option>
          </select>
        </>
    )
}
export default CategoryFilter