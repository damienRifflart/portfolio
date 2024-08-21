export function ExpCard({title, description, img, url}: {title: string, description: string, img: string, url:string}) {
    return(
        <div className="flex flex-col">
            <div className="flex flex-row h-fit gap-8 bg-[#EDD3B8] rounded-xl p-5 expCard">
                <div className="relative group flex justify-center items-start">
                    <img
                        src={img}
                        alt="Pharmacie photo"
                        className="h-[15rem] rounded-xl object-none object-[66%] group-hover:brightness-[.35] transition object-cover img"
                    />
                    <a
                        href={url}
                        target="_blank"
                        className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100"
                    >
                        Accèder au site web
                    </a>
                </div>

                <div className="flex flex-col max-w-[50%] expText">
                    <p className="text-3xl font-bold font-sen expTitle">{title}</p>
                    <p className="text-2xl font-sen text-justify flex items-center h-full expDesc">{description}</p>
                </div>
            </div>
        </div>
    )
}
