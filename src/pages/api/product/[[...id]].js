import {
 addData,
 deleteData,
 retrieveData,
 retrieveDataById,
 updateData,
} from "@/services";

export default async function handler(req, res) {
 if (req.method === "GET") {
  if (req.query.id) {
   const data = await retrieveDataById("product", req.query.id[0]);
   console.log(data);
   const ResponseInit = {status: 200, statusText: "OK"};
   return res.status(200).json({...ResponseInit, message: data});
  } else {
   const data = await retrieveData("product");
   console.log(data);
   const ResponseInit = {status: 200, statusText: "OK"};
   return res.status(200).json({...ResponseInit, message: data});
  }
 }
 if (req.method === "POST") {
  if (req.body) {
   if (
    req.body.name &&
    req.body.category &&
    req.body.price &&
    req.body.description &&
    req.body.materials &&
    req.body.stock
   ) {
    const data = await addData("product", {
     ...req.body,
     createdAt: Date.now(),
     editedAt: Date.now(),
    });
    const ResponseInit = {status: 200, statusText: "OK"};
    return res.status(200).json({...ResponseInit, message: data});
   } else {
    const ResponseInit = {status: 422, statusText: "Unprocessable Entity"};
    return res.status(422).json({
     ...ResponseInit,
     message:
      "required body name, category, price, description, materials, stock",
    });
   }
  } else {
   const ResponseInit = {status: 422, statusText: "Unprocessable Entity"};
   return res.status(422).json({
    ...ResponseInit,
    message:
     "required body name, category, price, description, materials, stock",
   });
  }
 }

 if (req.method === "PUT") {
  if (req.query.id) {
   if (req.body) {
    const data = await updateData("product", req.query.id[0], {
     ...req.body,
     editedAt: Date.now(),
    });
    const ResponseInit = {status: 200, statusText: "OK"};
    return res.status(200).json({...ResponseInit, message: data});
   }
  } else {
   const ResponseInit = {status: 422, statusText: "Unprocessable Entity"};
   return res.status(422).json({
    ...ResponseInit,
    message: "required query id",
   });
  }
 }

 if (req.method === "DELETE") {
  if (req.query.id) {
   const data = await deleteData("product", req.query.id[0]);
   const ResponseInit = {status: 200, statusText: "OK"};
   return res.status(200).json({...ResponseInit, message: data});
  } else {
   const ResponseInit = {status: 422, statusText: "Unprocessable Entity"};
   return res.status(422).json({
    ...ResponseInit,
    message: "required query id",
   });
  }
 }

 return res.status(405).json({status: 405, statusText: "Method Not Allowed"});
}
