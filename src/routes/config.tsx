import type { ReactNode } from "react";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";
import { Accordion } from "../components/Accordion/Accordion";

export type RouteType = {
    id: string;
    title: string;
    element: ReactNode;
};

export const routes: RouteType[] = [
    {id: "imagegallery", title: "Image Gallery", element: <ImageGallery/>},
    {id: "accordion", title: "Accordion", element: <Accordion />}
];