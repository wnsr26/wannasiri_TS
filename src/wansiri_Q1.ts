// 1.1 
let employees : [number, string, number, number, number, string][]
employees = [
    [1001,"Victoria",1,30000.00,0,""],
    [1002,"Luna",3,60000.00,0,""],
    [1003,"Krystal",6,40000.00,0,""],
    [1004,"Amber",2,30000.00,0,""],
    [1005,"Sulli",3,40000.00,0,""],
]
employees.forEach((s)=>{
    //1.2
    if(s[2]< 1){
        s[4] = s[3]*0
    }else if(s[2]>=3){
        s[4] = s[3]*1
    }else if(s[2]>=5){
        s[4] = s[3]*2
    }else{
        s[4] = s[3]*3
    }

    if(s[2]<= 3){
        s[5] = "Rico Cooker"
    }else{
        s[5] = "Microwave Oven"
    }
    console.log(
    `    ---------------------------
        ID: ${s[0]} 
        Name: ${s[1]} 
        WorkYear: ${s[2]} 
        Salary: ${s[3]} 
        Bonus: ${s[4]} 
        Gift: ${s[5]}
    ---------------------------`)
});