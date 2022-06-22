import mongoose, { model,models } from "mongoose";
const todoSchema = mongoose.Schema(
      {
            message:{
                  type:String,
                  required:true,
            },
            user:{
                  type:String,
            },
            date:{
                  type:Date,
                  value:Date.now
            }
      }     
)
const Todo = models.todo || model("todo",todoSchema)

export default Todo;