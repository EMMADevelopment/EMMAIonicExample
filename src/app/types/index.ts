export enum IN_APP_TYPE {
    NATIVE_AD = "nativeAd",
    ADBALL = "adball",
    BANNER = "banner",
    STARTVIEW = "startview",
    STRIP = "strip"

}

export interface StartSessionParams{
    sessionKey : string;
    isDebug : boolean;
}

export interface LoginRegisterUserParams {
    userId: string;
    email?: string;
}

export interface EventParams {
    token: string;
    attributes?: Record<string, string | number>;
}

export interface OrderParams {
    orderId: string;
    totalPrice: number;
    customerId: string;
    coupon?: string;
    extras?: Record<string, string>; 
}

export interface ProductParams {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    extras: Record<string, string>; 
}

interface Fields {
    Subtitle: string;
    CTA: string;
    "Main picture": string;
    Title: string;
}

export interface EMMANativeAd {
    id: number;
    templateId: string;
    cta: string;
    times: number;
    tag: string;
    showOn: string;
    fields: Fields;
}
