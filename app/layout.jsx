import "./globals.css";
export const metadata = {
  title: "Sahlamol V B | S&OP, Supply Planning & Supply Chain Analytics",
  description: "Entry-level S&OP, supply planning and demand planning portfolio: forecasting, safety stock, allocation and SAP MM experience."
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body className="font-sans antialiased">{children}</body></html>);
}
