export enum IN_APP_TYPE {
    NATIVE_AD = "nativeAd",
    ADBALL = "adball",
    BANNER = "banner",
    STARTVIEW = "startview",
    STRIP = "strip"

}

export interface startSessionParams{
    sessionKey : string;
    isDebug : boolean;
}

export interface loginRegisterUserParams {
    userId: string;
    email?: string;
}

export interface eventParams {
    eventRequest: string;
    eventAttributes?: Record<string, string | number>;
}

export interface orderParams {
    orderId: string;
    totalPrice: number;
    customerId: string;
    currencyCode: string;
    coupon?: string;
    extras?: Record<string, string>; 
}

export interface productParams {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    extras: Record<string, string>; 
}
