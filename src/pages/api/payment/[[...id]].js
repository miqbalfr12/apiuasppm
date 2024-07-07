import {
 retrieveData,
 retrieveDataById,
 addData,
 updateData,
 deleteData,
} from "@/services";

export default async function handler(req, res) {
 if (req.method === "GET") {
  if (req.query.id) {
   const data = await retrieveDataById("payment", req.query.id[0]);
   console.log(data);
   const ResponseInit = {status: 200, statusText: "OK"};
   return res.status(200).json({...ResponseInit, message: data});
  } else {
   const data = await retrieveData("payment");
   const ResponseInit = {status: 200, statusText: "OK"};
   return res.status(200).json({...ResponseInit, message: data});
  }
 }

 if (req.method === "POST") {
  if (req.body) {
   if (
    req.body.total &&
    req.body.consumer &&
    req.body.createdBy &&
    req.body.order
   ) {
    const data = await addData("payment", {
     ...req.body,
     status: false,
     createdAt: Date.now(),
     editedAt: Date.now(),
    });
    const ResponseInit = {status: 200, statusText: "OK"};
    return res.status(200).json({...ResponseInit, message: data});
   } else {
    const ResponseInit = {
     status: 422,
     statusText: "Unprocessable Entity",
     message: "amount, consumer and createdBy are required",
    };
    return res.status(405).json({...ResponseInit});
   }
  } else {
   const ResponseInit = {status: 422, statusText: "Unprocessable Entity"};
   return res.status(405).json({...ResponseInit, message: "body is required"});
  }
 }
 if (req.method === "PUT") {
  if (req.query.id) {
   const data = await updateData("payment", req.query.id[0], {status: true});
   const ResponseInit = {status: 200, statusText: "OK"};
   return res.status(200).json({...ResponseInit, message: data});
  } else {
   const ResponseInit = {status: 422, statusText: "No Content"};
   return res.status(422).json({...ResponseInit, message: "id is required"});
  }
 }
 if (req.method === "DELETE") {
  if (req.query.id) {
   const data = await deleteData("payment", req.query.id[0]);
   const ResponseInit = {status: 200, statusText: "OK"};
   return res.status(200).json({...ResponseInit, message: data});
  } else {
   const ResponseInit = {status: 422, statusText: "No Content"};
   return res.status(422).json({...ResponseInit, message: "id is required"});
  }
 }

 return res.status(405).json({message: "Method not allowed"});
}
