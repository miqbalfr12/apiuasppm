import {orderServices} from "@/services/services";
import {useRouter} from "next/router";
import React from "react";

export default function Id() {
 const router = useRouter();

 const [data, setData] = React.useState(null);
 const [btn, setBtn] = React.useState("");

 const getData = (id) => {
  console.log(id);
  console.log(router.query.id);
  orderServices.detail(id).then((data) => {
   console.log(data.data.message);
   setData(data.data.message);
   if (data.data.message?.status)
    setBtn(data.data.message.status ? "Lunas" : "Bayar");
   else setBtn("Bayar");
  });
 };

 const payData = (id) => {
  console.log(id);
  orderServices.pembayaran(id).then((data) => {
   console.log(data.data.message);
   setBtn("Lunas");
  });
 };

 React.useEffect(() => {
  if (data == null && router.query.id) {
   getData(router.query.id);
  }
 }, [data, router.query.id]);

 const HandleOnClick = () => {
  setBtn("Loading");
  payData(router.query.id);
 };

 return (
  <main className="flex h-screen flex-col items-center justify-center p-24 overflow-hidden">
   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px]  before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px]  after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:w-[480px] after:w-[240px] before:lg:h-[360px]"></div>
   {data ? (
    <div className="flex flex-col items-center gap-2">
     <h1 className="text-3xl font-bold">{data["consumer"]}</h1>
     {data["order"].map((item) => (
      <div
       className="flex items-center gap-2"
       key={item.id}>
       <p>
        {item.product} x {item.qty} @
        {Intl.NumberFormat("en-ID", {
         style: "currency",
         currency: "IDR",
         maximumFractionDigits: 0,
        }).format(item.price)}
       </p>
      </div>
     ))}
     <p>
      Total:{" "}
      {Intl.NumberFormat("en-ID", {
       style: "currency",
       currency: "IDR",
       maximumFractionDigits: 0,
      }).format(data["total"])}
     </p>
     <button
      className={` rounded-md mt-10 px-4 py-2  ${
       btn == "Lunas"
        ? "border-2 border-blue-500  text-white"
        : "bg-blue-500 text-white"
      }`}
      onClick={() => {
       if (btn == "Bayar") {
        HandleOnClick();
       }
      }}>
      {btn}
     </button>
    </div>
   ) : (
    <p>Loading...</p>
   )}
  </main>
 );
}
