
import { Suspense } from 'react';
import Loading from "./components/loading/loading";
import { RouterProvider } from './components/providers/routerProvider';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RouterProvider>
        <Suspense fallback={<Loading />}>
          <body className='bg-[#0E0729]'>
            {children}
          </body>
        </Suspense>
      </RouterProvider>
    </html>
  );
}
