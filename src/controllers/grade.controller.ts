import {Elysia, t} from "elysia";

export const gradeController = new Elysia({prefix: "/grade"})
.post(
    "/gradeinfo",
    async({query,set,body}) =>{
        try{
            const { score } = body;

            if(!score) {
                set.status = 400;
                return {success: false, error:"score is require"};
            }

            let grade = "";
            let message = "";

            if(score >= 80) {
                grade = "A";
                message = "ยอดเยี่ยม";
            }else if (score >= 70) {
                grade = "B";
                message = "เยี่ยม";
            }else if (score >= 60){
                grade = "C";
                message = "เยี่ยม";
            }else if (score >=50){
                grade = "F";
                message = "แย่";
            }else{
                grade = "F";
                message = "แย่";
            }

            return{
                grade,
                message,
            };


        } catch(error){
            set.status=400;
            return{ success:false,error:"score is required"};
        }

    },
    {
        body: t.Object({
            score: t.Number(),
        }),
    }
   

)