export const metadata = {
  title: 'S4 Gladiators',
  description: 'Turniej Smashing Four',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
