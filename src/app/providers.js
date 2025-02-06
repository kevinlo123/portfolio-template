// app/providers.tsx
'use client'

import {HeroUIProvider} from "@heroui/react";
import { ThemeProvider } from "@material-tailwind/react"; 

export function Providers({children}) {
  return (
        <HeroUIProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    )
}