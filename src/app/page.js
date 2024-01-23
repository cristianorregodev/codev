import { About } from '@/components/Home/About'
import { Articles } from '@/components/Home/Articles'
import { Banner } from '@/components/Home/Banner'
import { Experience } from '@/components/Home/Experience'
import { Projects } from '@/components/Home/Projects'
import { Stack } from '@/components/Home/Stack'
export default function Home() {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-full bg-dark-50 dark:bg-dark-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,153,255,0.25),rgba(255,255,255,0))]"></div>
            <Banner />
            <Experience />
            <Projects />
            <About />
            <Articles />
            <Stack />
        </>
    )
}
