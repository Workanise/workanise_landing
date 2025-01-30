import Axios from 'axios';

const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_KEY_API as string;
const SECRET_API_KEY = process.env.NEXT_PUBLIC_SECRET_KEY_API as string;
const PAYLINK_ID = process.env.NEXT_PUBLIC_PAYLINK_ID as string;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

if (!PUBLIC_API_KEY || !PAYLINK_ID || !BASE_URL) {
    throw new Error("Missing API keys or paylinkId");
}

export const api = Axios.create({
    baseURL: `${BASE_URL}/paylink/${PAYLINK_ID}`,
    headers: {
        Authorization: `Bearer ${SECRET_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "cache-control": "no-cache",
    },
    params: {
        apiKey: PUBLIC_API_KEY,
    },
});
