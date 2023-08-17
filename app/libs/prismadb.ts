// PrismaClient를 인스턴스화

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
// prisma가 전역에 존재하지 않으면 새로 만듬
const client = globalThis.prisma || new PrismaClient();
// 개발환경에서만 client로 설정. 개발모드에서 기존 연결 유지 (개발모드 성능 향상)
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
