export const env = {
  env: process.env.NODE_ENV,
  appName: process.env.APP_NAME,
  currentYear: new Date().getFullYear(),
  mainDomain: process.env.NEXT_PUBLIC_MAIN_DOMAIN || "https://coinfutura.com"
}