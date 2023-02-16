const express= require('express');
const app= express();
app.use(express.json())

app.get('/',(req,res)=>{
    // const user = [
    //     {
            
    //         "name": "Neetu Gaur",
    //         "code": "NEGA",
    //         "assessmentMonth": {
    //             "month": 5,
    //             "year": 2022
    //         },
    //         "performance": [
    //             {
    //                 "movement": "Push Ups",
    //                 "performance": 18
    //             },
    //             {
    //                 "movement": "Strict Press",
    //                 "performance": 20,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "Plank",
    //                 "performance": 90
    //             },
    //             {
    //                 "movement": "Bentover Row",
    //                 "performance": 21,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "Deadlift",
    //                 "performance": 21,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "High Plank",
    //                 "performance": 75
    //             },
    //             {
    //                 "movement": "Squats",
    //                 "performance": 41
    //             },
    //             {
    //                 "movement": "Wall Sit",
    //                 "performance": 65
    //             },
    //             {
    //                 "movement": "Burpees",
    //                 "performance": 17
    //             },
    //             {
    //                 "movement": "Run",
    //                 "performance": 360
    //             },
    //             {
    //                 "movement": "Sit Ups",
    //                 "performance": 30
    //             },
    //             {
    //                 "movement": "Leg Raises",
    //                 "performance": 25
    //             }
    //         ],
           
    //     }, {
            
    //         "name": "Neetu Gaur",
    //         "code": "NEGA",
    //         "assessmentMonth": {
    //             "month": 10,
    //             "year": 2022
    //         },
    //         "performance": [
    //             {
    //                 "movement": "Push Ups",
    //                 "performance": 25
    //             },
    //             {
    //                 "movement": "Strict Press",
    //                 "performance": 25,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "Plank",
    //                 "performance": 80
    //             },
    //             {
    //                 "movement": "Bentover Row",
    //                 "performance": 25,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "Deadlift",
    //                 "performance": 25,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "High Plank",
    //                 "performance": 80
    //             },
    //             {
    //                 "movement": "Squats",
    //                 "performance": 45
    //             },
    //             {
    //                 "movement": "Wall Sit",
    //                 "performance": 60
    //             },
    //             {
    //                 "movement": "Burpees",
    //                 "performance": 18
    //             },
    //             {
    //                 "movement": "Run",
    //                 "performance": 380
    //             },
    //             {
    //                 "movement": "Sit Ups",
    //                 "performance": 50
    //             },
    //             {
    //                 "movement": "Leg Raises",
    //                 "performance": 45
    //             }
    //         ],
    
    
    
    //     }, {
    //         "_id": {
    //             "$oid": "63ac4c7a6e58e188611c2a84"
    //         },
    //         "name": "Neetu Gaur",
    //         "code": "NEGA",
    //         "assessmentMonth": {
    //             "month": 3,
    //             "year": 2022
    //         },
    //         "performance": [
    //             {
    //                 "movement": "Push Ups",
    //                 "performance": 15
    //             },
    //             {
    //                 "movement": "Strict Press",
    //                 "performance": 18,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "Plank",
    //                 "performance": 40
    //             },
    //             {
    //                 "movement": "Bentover Row",
    //                 "performance": 18,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "Deadlift",
    //                 "performance": 17,
    //                 "weight_used": 7.5
    //             },
    //             {
    //                 "movement": "High Plank",
    //                 "performance": 65
    //             },
    //             {
    //                 "movement": "Squats",
    //                 "performance": 31
    //             },
    //             {
    //                 "movement": "Wall Sit",
    //                 "performance": 55
    //             },
    //             {
    //                 "movement": "Burpees",
    //                 "performance": 7
    //             },
    //             {
    //                 "movement": "Run",
    //                 "performance": 260
    //             },
    //             {
    //                 "movement": "Sit Ups",
    //                 "performance": 20
    //             },
    //             {
    //                 "movement": "Leg Raises",
    //                 "performance": 15
    //             }
    //         ],
            
    //     }
    
    // ];
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