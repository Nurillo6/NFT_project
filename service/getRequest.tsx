"use server"
import { API } from "@/hooks/getEnv"

export const getRequestServer = async (url: string, params?: Record<string, string>) => {
  const query = params
    ? '?' + new URLSearchParams(params).toString()
    : '';
  const res = await fetch(`${API}${url}${query}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data;
};
