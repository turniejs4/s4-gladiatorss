export const metadata = {
  title: 'S4 Gladiators',
  description: 'Turniej Smashing Four',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
