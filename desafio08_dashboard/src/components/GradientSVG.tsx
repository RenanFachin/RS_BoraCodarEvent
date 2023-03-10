function SalesGradientSVG() {
   const idCSS = "SalesDashboard";


   return (
      <svg style={{ height: 0 }}>
         <defs>
            <linearGradient id={idCSS} rotate={121.94}>
               <stop offset="15.98%" stopColor="#CE9FFC" />
               <stop offset="82.85%" stopColor="#7367F0" />
            </linearGradient>
         </defs>
      </svg>
   );
}

function GoalsGradientSVG() {
   const idCSS = "GoalsDashboard";


   return (
      <svg style={{ height: 0 }}>
         <defs>
            <linearGradient id={idCSS} rotate={121.94}>
               <stop offset="15.98%" stopColor="#DF9780" />
               <stop offset="82.85%" stopColor="#A66DE9" />
            </linearGradient>
         </defs>
      </svg>
   );
}

export {
   SalesGradientSVG,
   GoalsGradientSVG
}