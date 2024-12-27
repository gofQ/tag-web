import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/config";

export const funcs = createApi({
  reducerPath: "funcs",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Scooter ekleme
    addScooter: builder.mutation({
      query: (body) => ({
        url: "/api/scooters/add",
        method: "POST",
        body,
      }),
    }),

    // Scooter güncelleme
    updateScooter: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/api/scooters/update/${id}`, 
        method: "PUT",
        body, 
      }),
    }),
    

    // Gmail gönderme
    addGmail: builder.mutation({
      query: (body) => ({
        url: "/api/function/gmail",
        method: "POST",
        body,
      }),
    }),

    // Scooter listesi
    getScooters: builder.query({
      query: () => ({
        url: "/api/scooters/all",
        method: "GET",
      }),
    }),

    // Bildirim gönderme
    sendNotifications: builder.mutation({
      query: (body) => ({
        url: "/api/notifications/send",
        method: "POST",
        body,
      }),
    }),

    // İletişim bilgisi gönderme
    sendContacts: builder.mutation({
      query: (body) => ({
        url: "/api/function/contact",
        method: "POST",
        body,
      }),
    }),

    // İncrement verisi alma
    getİncrement: builder.query({
      query: () => ({
        url: "/api/increment/increment",
        method: "GET",
      }),
    }),

    // İletişim bilgisi listeleme
    getContacts: builder.query({
      query: () => ({
        url: "/api/function/contact",
        method: "GET",
      }),
    }),

    // Admin giriş geçmişi alma
    getLoginHistoryy: builder.query({
      query: () => ({
        url: "/api/admins/history",
        method: "GET",
      }),
    }),

    // Bildirim listesi alma
    getNotifications: builder.query({
      query: () => ({
        url: "/api/notifications/list",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetLoginHistoryyQuery,
  useGetContactsQuery,
  useGetİncrementQuery,
  useSendContactsMutation,
  useAddGmailMutation,
  useAddScooterMutation,
  useUpdateScooterMutation,
  useGetScootersQuery,
  useSendNotificationsMutation,
  useGetNotificationsQuery,
}: any = funcs;
