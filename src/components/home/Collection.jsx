import Summer from "../../assets/images/home/collection/EverydayElegance.jpg"
import Office from "../../assets/images/home/collection/OfficeStyle.jpg"

export default function Collection() {
    return (
        <section className="my-12 px-4">
            <h2 className="mb-8 text-center font-tenor-sans text-2xl uppercase tracking-[0.25em] text-text-body md:text-3xl">
                Collections
            </h2>

            <div className="mx-auto max-w-5xl space-y-12">
                {/* Urban Edge Collection */}
                <div className="group relative overflow-hidden rounded-lg shadow-sm">
                    <img
                        src={Summer}
                        alt="Summer Collection"
                        className="block h-87.5 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-112.5"
                    />

                    <div className="absolute inset-0 flex items-end justify-start bg-black/30 p-6 transition-opacity duration-300 group-hover:bg-black/40 md:p-8">
                        <h3 className="font-play-fair text-xl uppercase tracking-[0.2em] text-white md:text-3xl">
                            Everyday Elegance
                        </h3>
                    </div>
                </div>

                {/*Fashion Film*/}
                <div className="mx-auto w-full max-w-2xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/AZngcdzGnNg?si=RReI435azr05kKT7&amp"
                            title="LUCID Fashion Film"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/*Office Collection*/}
                <div className="group relative overflow-hidden rounded-lg shadow-sm">
                    <img
                        src={Office}
                        alt="Office Collection"
                        className="block h-87.5 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-112.5"
                    />

                    <div className="absolute inset-0 flex items-end justify-start bg-black/30 p-6 transition-opacity duration-300 group-hover:bg-black/40 md:p-8">
                        <h3 className="font-play-fair text-xl uppercase tracking-[0.2em] text-white md:text-3xl">
                            Office Style
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    )
}