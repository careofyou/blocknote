import { Navbar } from "./_components/navbar";

const MartketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full dark:bg-[#080a24]">
            <Navbar />
            <main h-full pt-40>
                {children}
            </main>
        </div>
    );
}
 
export default MartketingLayout;