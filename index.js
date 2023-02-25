const express= require('express');
const app= express();
app.use(express.json())

app.get('/',(req,res)=>{
   
    const user=req.body;

    
    
    // sorting of the array for finding the current month and previous month
    customsort = (a, b) => {
        const monthA = a.assessmentMonth.month;
        const monthB = b.assessmentMonth.month;
        if (monthA < monthB) return 1;
        else if (monthA > monthB) return -1;
        return 0;
    }
    user.sort(customsort);
    // console.log(ss);
    const user_overall_current_month_data = [];
    for(let j=0;j<user.length-1;j++){
    const current_month = user[j].assessmentMonth.month;
    const previous_month = user[j+1].assessmentMonth.month;
    
    const diff = current_month - previous_month;
    
    const user_current_performance = [];
    
    
    for (let i = 0; i < user[j].performance.length; i++) {
        const net_user_performance = (user[j].performance[i].performance-user[j+1].performance[i].performance) ;
    
        user_current_performance.push({
            "movement": user[j].performance[i].movement,
            "improvement": net_user_performance
        });
    }
    user_overall_current_month_data.push({
        "name": user[j].name,
        "assessmentMonth":{
           "month" :user[j].assessmentMonth.month,
           "year": user[j].assessmentMonth.year
        },

        "Gap": diff,
        "improvement": user_current_performance
    });
    }
    // console.log(user_overall_current_month_data);
    
    // for(let i=0;i<user_overall_current_month_data[0].improvement.length;i++){
    //     console.log(user_overall_current_month_data[0].improvement[i]);
    // }
    res.json( user_overall_current_month_data);
})

app.listen(5000,()=>{

console.log("server is running at port 5000");

})
