import instance from "@/lib/axios/instance";

export const orderServices = {
 detail: (data) => instance.get(`/api/payment/${data}`),
 pembayaran: (data) => instance.put(`/api/payment/${data}`),
};
