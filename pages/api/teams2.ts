// import connectDB from "../../utils/connectMongoDB";
// import type { NextApiRequest, NextApiResponse } from "next";
// import Region from "@/data/models/regions";

// /**
//  * @param {import("next").NextApiRequest}req
//  * @param  {import("next").NextApiResponse}req
//  */
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<{}>
// ) {
//   console.log("Connecting DB");
//   await connectDB(); // Wait for the database connection to be established
//   console.log("DB connected");

//   try {
//     let t = await Region.find();
//     await Region.create({ _id: 50, name: "test", number: 50 });
//     console.log(t);
//     res.status(200).json(t);
//   } catch (error) {
//     console.error("Error querying the database:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
