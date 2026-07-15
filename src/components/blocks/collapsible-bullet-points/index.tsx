// "use client";

// import { Button } from "@/components/ui/button";
// import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
// import { cn } from "@/lib/utils";
// import { useState } from "react";

const MAX_TRIGGER_SIZE = 300;

function createBulletPointsList(bulletPoints: string[]) {
    return (
        <ul>
            {bulletPoints.map((point, index) => (
                <li
                    key={index}
                    className="flex items-start gap-2 text-base font-normal text-muted-foreground"
                >
                    <span className="w-2.5 h-2.5 text-muted-foreground">•</span>
                    {point}
                </li>
            ))}
        </ul>
    );
}

// function getBulletPointBreakIndex(bulletPoints: string[], maxSize: number): number {
//     let size = 0;

//     for (let i = 0; i < bulletPoints.length; i++) {
//         size += bulletPoints[i].length;

//         if (size > maxSize) {
//             return i > 0 ? i - 1 : 0;
//         }
//     }

//     return bulletPoints.length - 1;
// }

// function getTriggerPoints(bulletPoints: string[], breakIndex: number) {
//     const points = [];

//     for (let i = 0; i <= breakIndex; i++) {
//         points.push(bulletPoints[i]);
//     }

//     return createBulletPointsList(points);
// }

// function getContentPoints(bulletPoints: string[], breakIndex: number) {
//     const points = [];

//     for (let i = breakIndex + 1; i < bulletPoints.length; i++) {
//         points.push(bulletPoints[i]);
//     }

//     return createBulletPointsList(points);
// }

// export function CollapsibleBulletPoints({ bulletPoints, maxSize = MAX_TRIGGER_SIZE }: { bulletPoints: string[]; maxSize?: number }) {
//     const [isOpen, setIsOpen] = useState<boolean>(false);

//     const breakIndex = getBulletPointBreakIndex(bulletPoints, maxSize);

//     if (breakIndex === bulletPoints.length - 1) {
//         return <div>{createBulletPointsList(bulletPoints)}</div>;
//     }

//     return (
//         <div>
//             <div className="relative text-left">
//                 {getTriggerPoints(bulletPoints, breakIndex)}

//                 <div
//                     className={cn(
//                         "w-full h-10 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-background",
//                         { hidden: isOpen },
//                     )}
//                 ></div>
//             </div>

//             <Collapsible open={isOpen} onOpenChange={setIsOpen}>
//                 <CollapsibleContent>
//                     {getContentPoints(bulletPoints, breakIndex)}
//                 </CollapsibleContent>
//             </Collapsible>

//             <div className={cn("w-full flex items-center justify-center p-2 h-12")} onClick={() => setIsOpen(!isOpen)}>
//                 <Button
//                     className={cn({ hidden: !isOpen })}
//                     size="sm"
//                     variant="outline"
//                 >
//                     Read less
//                 </Button>

//                 <Button
//                     className={cn({ hidden: isOpen })}
//                     size="sm"
//                     variant="outline"
//                 >
//                     Read more
//                 </Button>
//             </div>
//         </div>
//     );
// }

export function CollapsibleBulletPoints({
    bulletPoints,
    maxSize = MAX_TRIGGER_SIZE,
}: {
    bulletPoints: string[];
    maxSize?: number;
}) {
    return <div>{createBulletPointsList(bulletPoints)}</div>;
}
