export const Container = ({ children, id = '' }) => {
    return (
        <section className="container mx-auto px-2 lg:px-22 xl:px-28 2xl:px-52" id={id}>
            {children}
        </section>
    )
}
