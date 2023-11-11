const PublicLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full dark:bg-[#080a24]">
            {children}
        </div>
     );
}
 
export default PublicLayout;