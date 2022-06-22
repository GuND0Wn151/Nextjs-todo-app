
import connectDB from "../../utils/ConnectDb"
import Todo from "../../models/Todo"
export default async function handler(req, res) {
  console.log(req.body);
  await connectDB()

  console.log("Connected to DB successfull")

  const test= await Todo.create({
      message:req.body.message,
      user:req.body.user
  })
  res.json({test})
}
