import { Listing, User } from "@prisma/client";

// 날짜와 시간 정보가 아닌 문자열 형태로 저장하기 위함
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
