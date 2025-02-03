import Image from 'next/image'
import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="relative overflow-hidden rounded-2xl transition duration-200 group hover:shadow-xl border border-zinc-100 w-96">
                <div className="w-full aspect-w-16 aspect-h-10rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                    <Image
                        src={"/public/vercel.svg"}
                        alt="thumbnail"
                        layout='fill'
                        objectFit="cover"
                        className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                    />
                </div>
                <div className=" p-4">
                    <h2 className="font-bold my-4 text-lg">
                        Wonder Woman
                    </h2>
                    <h2 className="font-normal my-4 text-sm ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est quae accusantium provident hic saepe quos magni doloribus deserunt itaque suscipit odit, quam sit nulla ipsa eaque perferendis fugiat ratione ducimus earum minima. Vitae ut neque autem quam dolore corrupti architecto! Dolorem exercitationem ab nihil quo veniam, quaerat at in!
                    </h2>
                    <div className="flex flex-row justify-between items-center mt-10">
                        <span className="text-sm text-gray-500">{Date.now()}</span>
                        <div className="relative z-10 px-6 py-2 text-white font-bold rounded-xl block text-xs">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
