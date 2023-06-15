import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

interface saleHistory {
    sellCounter: number;
    soldDate: Timestamp;
    isSold: boolean;
}

export const timeSeriesData = atom<saleHistory[]>({
    key: 'timeSeriesData',
    default: [],
})