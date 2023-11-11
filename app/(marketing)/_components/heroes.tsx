import Image from "next/image";

export const Heroes = () => {
    return (
    <div className="flex flex-col items-center justify-center max-w-5xl dark:bg-[#080a24]">
        <div className="flex items-center">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]
            md:h-[400px] md:w-[400px]">
                <Image 
                 src="/black_cat_2.png"
                 fill
                 className="object-contain dark:hidden"
                 alt="cat_1"
                />
                <Image 
                 src="/white_cat_2.png"
                 fill
                 className="object-contain hidden dark:block"
                 alt="cat_1"
                />
            </div>
            <div className="relative h-[400px] w-[400px] hidden md:block">
            <Image 
                 src="/black_cat_1.png"
                 fill
                 className="object-contain dark:hidden"
                 alt="cat_2"
                />
            <Image 
                 src="/white_cat_1.png"
                 fill
                 className="object-contain hidden dark:block"
                 alt="cat_2"
                />
            </div>
        </div>
    </div>
    )
}