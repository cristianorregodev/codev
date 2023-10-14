import { About } from '@/components/Home/About'
import { Banner } from '@/components/Home/Banner'
import { Projects } from '@/components/Home/Projects'
import { Stack } from '@/components/Home/Stack'
export default function Home() {
    return (
        <>
            <Banner />
            <Projects />
            <About />
            <Stack />
        </>
    )
}
