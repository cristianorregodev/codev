export const Container = ({ children, id = '' }) => {
    return (
        <section className="pt-24 container mx-auto px-2 lg:w-[740px]" id={id}>
            {children}
        </section>
    )
}
