import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderbarDrawerProviderProps {
    children: ReactNode
}

type SiderbarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SiderbarDrawerContextData );

export function SiderbarDrawerProvider({children}:SiderbarDrawerProviderProps){
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(()=>{
        disclosure.onClose()
    }, [router.asPath])
    
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = ()=> useContext(SidebarDrawerContext)